import { REQUEST_POSTS, RECEIVE_POSTS } from "./index";

export function fetchPosts(subreddit, sort) {

    return function (dispatch) {

        dispatch(requestPosts(subreddit));

        return fetch(`https://www.reddit.com/r/${subreddit}.json?sort=${sort}&limit=50`)
            .then(
                response =>
                    response.json(),
                error => console.log('An error occurred...', error)
                // Do not use catch, because that will also catch
                // any errors in the dispatch and resulting render,
                // causing a loop of 'Unexpected batch number' errors.
                // https://github.com/facebook/react/issues/6895
                //error => console.log('An error occurred.', error)
            )
            .then(json =>
                // Here, we update the app state with the results of the API call.
                dispatch(receivePosts(subreddit, json))
            )
    }
}

export function requestPosts(subreddit) {
    return {
        type: REQUEST_POSTS,
        subreddit
    }
}

export function receivePosts(subreddit, json) {
    console.log("data: ");
    return {
        type: RECEIVE_POSTS,
        subreddit,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

