import { ADD_HASHTAG, DELETE_HASHTAG } from '../actions/index';

let tagId = 2;

export function searchReducer(state = {
    hashtags: [
        {id: 1, tag: 'travel'},
        {id: 2, tag: 'example'}
    ]
}, action) {
    switch (action.type) {
        case ADD_HASHTAG:
            let tags = state.hashtags;
            tagId++;
            tags.push({id: tagId, tag: action.hashtag });
            return Object.assign({}, state, {
                hashtags: tags
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

