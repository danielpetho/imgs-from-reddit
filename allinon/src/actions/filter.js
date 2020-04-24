import { DELETE_POSTS, SORT_POSTS, EMPTY_POSTS, EMPTY_SUBS } from ".";

// delete the posts by subreddit
export function deletePosts(subreddit) {
    return {
        type: DELETE_POSTS,
        subreddit
    };
}

// sort posts by flag
export function sortPosts(flag) {
    return {
        type: SORT_POSTS,
        flag
    }
}

// empty the posts on new search
export function emptyPosts() {
    return {
        type: EMPTY_POSTS
    }
}

// empty the subreddit bar on new search
export function emptySubs() {
    return {
        type: EMPTY_SUBS
    }
}