import {EMPTY_TAGS, ADD_HASHTAG, DELETE_HASHTAG } from '../actions/index';

let tagId = 2;

export function searchReducer(state = {
    hashtags: [

    ]
}, action) {
    switch (action.type) {
        case EMPTY_TAGS:
            return Object.assign({}, state, {
                hashtags: []
            });
        case ADD_HASHTAG:
            let newHashtags = state.hashtags;
            const obj = {id: ++tagId, tag: action.hashtag}
            newHashtags.push(obj);
            return Object.assign({}, state, {
                hashtags: newHashtags
            });
        case DELETE_HASHTAG:
            let newTags = state.hashtags;
            newTags = newTags.filter(e => e.id !== action.tagid);
            return Object.assign({}, state, {
                hashtags: newTags
            });
        default:
            return state;
    }
}

