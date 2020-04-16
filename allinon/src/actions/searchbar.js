import { ADD_SUBREDDIT, DELETE_SUBREDDIT, EMPTY_POSTS, EMPTY_TAGS } from './index';
import { fetchPosts } from './fetch';
import { filterTag } from './filter';

function addHashtag(hashtag) {
    return {
        type: ADD_SUBREDDIT,
        hashtag
    };
}

function deleteHashtag(tagid) {
    return {
        type: DELETE_SUBREDDIT,
        tagid
    };
}

function emptyPosts() {
    return {
        type: EMPTY_POSTS
    }
}

function emptyTags() {
    return {
        type: EMPTY_TAGS
    }
}

export function filterPosts(tagid,tag) {
    return (dispatch) => {
        dispatch(deleteHashtag(tagid));
        dispatch(filterTag(tag));
    }
}

export function processQuery(tags) {
    console.log(tags)
    let searchtags = tags.searchValues.split(" ");
    searchtags = searchtags.filter(e => e !== "");
    return (dispatch) => {
        dispatch(emptyTags());
        dispatch(emptyPosts());
        searchtags.forEach(tag => {
            dispatch(addHashtag(tag));
            dispatch(fetchPosts(tag, "top"));
        }) 
    }
}