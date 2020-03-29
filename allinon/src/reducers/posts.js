import {INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, EMPTY_POSTS, FILTER_TAG, SORT_POSTS, LOG_FETCH} from '../actions/index'

export function postsReducer(state = {
    items: [],
    isFetching: false,
    didInvalidate: false,
    fetchLogs: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case FILTER_TAG:
            let filterPosts = state.items.filter(e => e.subreddit !== action.tag);
            return Object.assign({}, state, {
                items: filterPosts
            })
        case SORT_POSTS:
            let sortedPosts = state.items;
            sortedPosts = action.flag === "new" ? [...sortedPosts].sort((a,b) => a.created < b.created) : [...sortedPosts].sort((a, b) => a.likes < b.likes);
            return Object.assign({}, state, {
                items: sortedPosts
            })
        case EMPTY_POSTS:
            return Object.assign({}, state, {
                items: []
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case LOG_FETCH:
            /*
             * saving how many elements was fetched for a subbredit. 
             * This data is used when the user wants to load more posts from the same subreddits.
             */
            const fetchLog = {
                subreddit: action.subreddit,
                before: action.before,
                after: action.after,
                receivedAt: action.receivedAt,
                count: action.count + 100
            }

            let flogs = state.fetchLogs;
            flogs = flogs.filter(e => {
                return e.subreddit === fetchLog;
            })
            flogs.push(fetchLog);
            return Object.assign({}, state, {
                lastUpdated: action.receivedAt,
                fetchLogs: flogs,
                isFetching: false
            })
        case RECEIVE_POSTS:
            /*
             * filter out posts except pictures (TODO: videos too)
             */
            let posts = action.posts;
            posts = posts.filter(e => {
                const post_hint = "" + e.post_hint;
                return post_hint.includes("image") // || post_hint.includes("hosted:video");
            });

            let filteredPosts = [];
            posts.forEach(e => {
                let url, mediaType;
                if (e.post_hint.includes("image")) { 
                    url = e.url;
                    mediaType = "img";
                } 
                if (e.post_hint.includes("hosted:video")) {
                    url = e.media.reddit_video.fallback_url;
                    mediaType = "video";
                } 
                if (e.post_hint.includes("rich:video")) {
                    url = e.url;
                    mediaType = "video";
                }

                /*
                 * create a new post
                 */
                let newPost = {
                    url: url,
                    likes: e.score,
                    permalink: "https://www.reddit.com" + e.permalink,
                    subreddit: e.subreddit,
                    created: e.created,
                    mediaType: mediaType
                };
                filteredPosts.push(newPost);
            })

            filteredPosts = filteredPosts.concat(...state.items)//.sort((a, b) => a.created - b.created);
            
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: filteredPosts
            });
        default:
            return state;
    }

}