import { ADD_HASHTAG, DELETE_HASHTAG, EMPTY_POSTS, EMPTY_TAGS } from './index';
import { fetchPosts } from './fetch';
import { filterTag } from './filter';

function addHashtag(hashtag) {
    return {
        type: ADD_HASHTAG,
        hashtag
    };
}

function deleteHashtag(tagid) {
    return {
        type: DELETE_HASHTAG,
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

export function processQuery(tags, sort) {
    const searchtags = tags.searchValues.split(" ");
    return (dispatch) => {
        dispatch(emptyTags());
        dispatch(emptyPosts());
        searchtags.forEach(tag => {
            dispatch(addHashtag(tag));
            dispatch(fetchPosts(tag, sort));
        }) 
    }
}