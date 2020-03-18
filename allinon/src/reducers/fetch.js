import {INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../actions/index'

export function fetchReducer(state = {
    items: [],
    isFetching: false,
    didInvalidate: false,
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE_POSTS:
            let posts = action.posts;
            posts = posts.filter(e => {
                const post_hint = "" + e.post_hint;
                return post_hint.includes("image") || post_hint.includes("video");
            });

            let filteredPosts = [];
            posts.forEach(e => { 
                let newPost = {
                    url: e.url,
                    likes: e.score,
                    permalink: "https://www.reddit.com" + e.permalink,
                    subreddit: e.subreddit,
                    created: e.created
                };
                filteredPosts.push(newPost);
            })
            
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