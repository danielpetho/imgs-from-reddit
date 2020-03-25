import {INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, EMPTY_POSTS, FILTER_TAG, SORT_POSTS} from '../actions/index'

export function postsReducer(state = {
    items: [],
    isFetching: false,
    didInvalidate: false,
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
            console.log(state.items);
            let sortedPosts = state.items;
            sortedPosts = action.flag === "new" ? [...sortedPosts].sort((a,b) => a.created < b.created) : [...sortedPosts].sort((a, b) => a.likes < b.likes);
            console.log(sortedPosts);
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
        case RECEIVE_POSTS:
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

            filteredPosts = filteredPosts.concat(state.items)//.sort((a, b) => a.created - b.created);

            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: filteredPosts,
                lastUpdated: action.receivedAt,
            });
        default:
            return state;
    }

}