import {NOT_FETCH, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, EMPTY_POSTS, FILTER_TAG, SORT_POSTS, LOG_FETCH, INC_FETCH_COUNTER} from '../actions/index'

export function postsReducer(state = {
    items: [],
    isFetching: false,
    didInvalidate: false,
    fetchingCounter: 0,
    notexistingsubs: [],
    fetchLogs: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case FILTER_TAG:
            let tag = action.tag.slice(2)
            let filterPosts = state.items.filter(e => e.subreddit !== tag);
            let filterFlogs = state.fetchLogs.filter(e => e.subreddit !== tag);
            return Object.assign({}, state, {
                items: filterPosts,
                fetchLogs: filterFlogs
            })
        case SORT_POSTS:
            let sortedPosts = state.items;
            sortedPosts = action.flag === "new" ? [...sortedPosts].sort((a,b) => a.created < b.created) : [...sortedPosts].sort((a, b) => a.likes < b.likes);
            return Object.assign({}, state, {
                items: sortedPosts
            })
        case EMPTY_POSTS:
            return Object.assign({}, state, {
                items: [],
                fetchLogs: []
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });

        case NOT_FETCH:
            let newnotexistingsubs = state.notexistingsubs;
            newnotexistingsubs.push(action.subreddit);
            return Object.assign({}, state, {
                isFetching: false,
                notexistingsubs: newnotexistingsubs,
                fetchingCounter: state.fetchingCounter--
            })
        case INC_FETCH_COUNTER:
            return Object.assign({}, state, {
                fetchingCounter: state.fetchingCounter++
            })
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
            }

            let flogs = state.fetchLogs;
            flogs = flogs.filter(e => {
                return e.subreddit !== fetchLog.subreddit;
            })
            flogs.push(fetchLog);
            return Object.assign({}, state, {
                lastUpdated: action.receivedAt,
                fetchLogs: flogs
            })
        case RECEIVE_POSTS:
            /*
             * filter out posts except pictures (TODO: videos too)
             */
            let posts = action.posts;
            posts = posts.filter(e => {
                const post_hint = "" + e.post_hint;
                return post_hint.includes("image") // || post_hint.includes("svideo");
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

            let newItems = state.items;
            newItems = newItems.concat(...filteredPosts)//.sort((a, b) => a.created - b.created);
            
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: newItems,
                fetchingCounter: state.fetchingCounter--
            });
        default:
            return state;
    }

}