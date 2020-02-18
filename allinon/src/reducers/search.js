import { ADD_HASHTAG, DELETE_HASHTAG } from '../actions/index';

export function searchReducer(state = {
    hashtags: [
        {id: 1, tag: 'travel'},
        {id: 2, tag: 'example'}
    ]
}, action) {
    switch (action.type) {
        case ADD_HASHTAG:
            return Object.assign({}, state, {
                hashtags: action.hashtag
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

