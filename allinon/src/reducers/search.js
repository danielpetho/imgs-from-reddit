import { ADD_HASHTAG, DELETE_HASHTAG } from '../actions/index';

let tagId = 2;

export function searchReducer(state = {
    hashtags: [
        {id: 1, tag: '#art'},
    ]
}, action) {
    switch (action.type) {
        case ADD_HASHTAG:
            //let newTags = state.hashtags;
            let tags = action.hashtags;
            let searchValues = tags.searchValues.split(" ");
            let newHashtags = [];
            for (const tag of searchValues) {
                const obj = {id: ++tagId, tag: "#"+tag}
                console.log(obj);
                newHashtags.push(obj);
            }
            
            console.log(newHashtags);
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

