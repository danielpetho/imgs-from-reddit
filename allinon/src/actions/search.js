import { ADD_HASHTAG, DELETE_HASHTAG } from './index';

export function addHashtag(hashtags) {
    console.log(hashtags)
    return {
        type: ADD_HASHTAG,
        hashtags
    };
}

export function deleteHashtag(tagid) {
    return {
        type: DELETE_HASHTAG,
        tagid
    };
}