import { FILTER_TAG, SORT_POSTS } from ".";

export function filterTag(tag) {
    return {
        type: FILTER_TAG,
        tag
    };
}

export function sortPosts(flag) {
    return {
        type: SORT_POSTS,
        flag
    }
}