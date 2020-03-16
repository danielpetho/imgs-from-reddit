import { ADD_HASHTAG, DELETE_HASHTAG } from './index';
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

export function processQuery(tags) {
    const searchtags = tags.searchValues.split(" ");
    return (dispatch) => {
        for (const tag of searchtags) {
            dispatch(addHashtag(tag));
            dispatch(fetchPosts(tag));
        }
        
    }
}