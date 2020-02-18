import { ADD_HASHTAG, DELETE_HASHTAG } from './index';

export function addHashtag(hashtag) {
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