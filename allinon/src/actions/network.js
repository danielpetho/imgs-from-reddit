import 'core-js'
import fetch from 'cross-fetch';

import { RECEIVE_POSTS, REQUEST_POSTS } from './index';

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

export function fetchPosts(subreddit) {

    return function (dispatch) {

        dispatch(requestPosts(subreddit));

        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
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

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit];
    if (!posts) {
        return true;
    } else if (posts.isFetching) {
        return false;
    } else {
        return posts.didInvalidate;
    }
}
export function fetchPostsIfNeeded(subreddit) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.
    // This is useful for avoiding a network request if
    // a cached value is already available.
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            // Dispatch a thunk from thunk!
            return dispatch(fetchPosts(subreddit));
        } else {
            // Let the calling code know there's nothing to wait for.
            return Promise.resolve();
        }
    }
}