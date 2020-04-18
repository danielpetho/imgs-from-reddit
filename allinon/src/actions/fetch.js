import { REQUEST_POSTS, RECEIVE_POSTS, LOG_FETCH, NOT_FETCH } from "./index";
import { deleteHashtag } from "./searchbar";

export function fetchPosts(subreddit, sort, after) {

    return function (dispatch) {
        console.log(sort)
        dispatch(requestPosts(subreddit));

        let afterStr = "";
        if (after === undefined) afterStr = "";
        else afterStr = "&after=" + after; 

        if (sort === "top") sort = "/top";
        else sort = "/new"

        const fetchURL = `https://www.reddit.com/r/${subreddit}${sort}.json?&limit=50` + afterStr;
        
        return fetch(fetchURL)
            .then(
                response =>
                    response.json(),
                error => {
                    dispatch(deleteHashtag("r/"+subreddit));
                }

            )
            .then(json => {
                if(json) {
                    dispatch(receivePosts(subreddit, json));
                    dispatch(logFetch(subreddit, json));
                } else {
                    dispatch(notFetch(subreddit))
                    console.log("looks like there's no such subreddit as " + subreddit)
                }
                
            })
    }
}

export function notFetch(subreddit) {
    return {
        type: NOT_FETCH,
        subreddit
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

