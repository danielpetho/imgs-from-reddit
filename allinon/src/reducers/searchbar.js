import {EMPTY_SUBS, ADD_SUBREDDIT, DELETE_SUBREDDIT } from '../actions/index';

let tagId = 2;

/**
 * Storing the state of the subreddit bar.
 */
export function searchReducer(state = {
    subreddits: [

    ]
}, action) {
    switch (action.type) {
        case EMPTY_SUBS:
            return Object.assign({}, state, {
                subreddits: []
            });
        case ADD_SUBREDDIT:
            let newSubs = state.subreddits;
            const obj = {id: ++tagId, sub: "r/"+action.subreddit}
            newSubs.push(obj);
            return Object.assign({}, state, {
                subreddits: newSubs
            });
        case DELETE_SUBREDDIT:
            console.log(action)
            let newSubreddits = state.subreddits;
            newSubreddits = newSubreddits.filter(e => e.id !== action.subid);
            return Object.assign({}, state, {
                subreddits: newSubreddits
            });
        default:
            return state;
    }
}

