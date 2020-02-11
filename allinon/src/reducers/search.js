import { ADD_HASHTAG } from '../actions/index';

export function searchReducer(state = {
    hashtags: ['meszystar', 'travel']
}, action) {
    switch (action.type) {
        case ADD_HASHTAG:
            return Object.assign({}, state, {
                hashtags: action.hashtag
            });
        default:
            return state;
    }
}

