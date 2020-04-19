import {EMPTY_TAGS, ADD_SUBREDDIT, DELETE_SUBREDDIT } from '../actions/index';

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
        case ADD_SUBREDDIT:
            let newHashtags = state.hashtags;
            const obj = {id: ++tagId, tag: "r/"+action.hashtag}
            newHashtags.push(obj);
            return Object.assign({}, state, {
                hashtags: newHashtags
            });
        case DELETE_SUBREDDIT:
            let tag = action.tagid.slice(0);
            let newTags = state.hashtags;
            newTags = newTags.filter(e => e.tag !== tag);
            return Object.assign({}, state, {
                hashtags: newTags
            });
        default:
            return state;
    }
}

