import { ADD_HASHTAG } from './index';

export function justLog(hashtag) {
    return {
        type: ADD_HASHTAG,
        hashtag
    };
}