import { REQUEST_POSTS, RECEIVE_POSTS, LOG_FETCH, NOT_FETCH } from "./index";
import { deleteSubreddit } from "./searchbar";


/**
 * fetch posts from the subreddit by fetchby flag. 
 * If there's an after token, fetch only posts after the after token
 * if there's no such subreddit, delete the sub from the subreddit bar
 */
export function fetchPosts(subreddit, fetchby, after) {

    return function (dispatch) {
        dispatch(requestPosts(subreddit));

        let afterTkn = "";
        if (after === undefined) afterTkn = "";
        else afterTkn = "&after=" + after; 

        if (fetchby === "top") fetchby = "/top";
        else fetchby = "/new"

        const fetchURL = `https://www.reddit.com/r/${subreddit}${fetchby}.json?&limit=50` + afterTkn;
        
        return fetch(fetchURL)
            .then(
                response =>
                    response.json(),
                error => {
                    dispatch(deleteSubreddit("r/"+subreddit));
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

/**
 * Collect the notexisting subreddits to later print all of them on a modal (TODO)
 */
export function notFetch(subreddit) {
    return {
        type: NOT_FETCH,
        subreddit
    }
}

/**
 * request posts from the subreddit
 */
export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

/** 
 * receive posts, and map the json data
*/
export function receivePosts(subreddit, json) {
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
    }
}

/*
 * logs when the posts received, and 
 * save the before + after token for "loading more" query
 */
export function logFetch(subreddit, json) {
    return {
        type: LOG_FETCH,
        subreddit,
        receivedAt: Date.now(),
        before: json.data.before,
        after: json.data.after
    }
}

