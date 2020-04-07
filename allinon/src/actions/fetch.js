import { REQUEST_POSTS, RECEIVE_POSTS, LOG_FETCH } from "./index";

export function fetchPosts(subreddit, sort, after) {

    return function (dispatch) {

        dispatch(requestPosts(subreddit));

        let afterStr = "";
        if (after === undefined) afterStr = "";
        else afterStr = "&after=" + after; 

        const fetchURL = `https://www.reddit.com/r/${subreddit}.json?sort=${sort}&limit=25` + afterStr;
        //console.log(fetchURL);
        
        return fetch(fetchURL)
            .then(
                response =>
                    response.json(),
                error => console.log('An error occurred...', error)
            )
            .then(json => {
                dispatch(receivePosts(subreddit, json));
                dispatch(logFetch(subreddit, json));
            })
    }
}

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
    }
}

export function logFetch(subreddit, json) {
    return {
        type: LOG_FETCH,
        subreddit,
        receivedAt: Date.now(),
        before: json.data.before,
        after: json.data.after
    }
}

