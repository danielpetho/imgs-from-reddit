import { ADD_HASHTAG, DELETE_HASHTAG, EMPTY_TAGS } from './index';
import { fetchPosts } from './fetch';

function addHashtag(hashtag) {
    console.log(hashtag)
    return {
        type: ADD_HASHTAG,
        hashtag
    };
}

export function deleteHashtag(tagid) {
    return {
        type: DELETE_HASHTAG,
        tagid
    };
}

function emptyTags(tags) {
    return {
        type: EMPTY_TAGS,
        tags
    }
}

export function processQuery(tags) {
    const searchtags = tags.searchValues.split(" ");
    return (dispatch) => {
        dispatch(emptyTags(tags))
        searchtags.forEach(tag => {
            dispatch(addHashtag(tag));
            dispatch(fetchPosts(tag));
        })        
    }
}