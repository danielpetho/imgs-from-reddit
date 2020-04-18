import { ADD_SUBREDDIT, DELETE_SUBREDDIT, EMPTY_POSTS, EMPTY_TAGS, INC_FETCH_COUNTER } from './index';
import { fetchPosts } from './fetch';
import { filterTag } from './filter';

function addHashtag(hashtag) {
    return {
        type: ADD_SUBREDDIT,
        hashtag
    };
}

export function deleteHashtag(tagid) {
    return {
        type: DELETE_SUBREDDIT,
        tagid
    };
}

function emptyPosts() {
    return {
        type: EMPTY_POSTS
    }
}

function emptyTags() {
    return {
        type: EMPTY_TAGS
    }
}

function increaseFetchingCounter() {
    return {
        type: INC_FETCH_COUNTER
    }
}

export function filterPosts(tagid,tag) {
    return (dispatch) => {
        dispatch(deleteHashtag(tag));
        dispatch(filterTag(tag));
    }
}

export function processQuery(tags) {
    if(tags.searchValues !== undefined) {
        let searchtags = tags.searchValues.split(" ");
        searchtags = searchtags.filter(e => e !== "");
        return (dispatch) => {
            dispatch(emptyTags());
            dispatch(emptyPosts());
            searchtags.forEach(tag => {
                dispatch(addHashtag(tag));
                dispatch(fetchPosts(tag, tags.sortposts));
                dispatch(increaseFetchingCounter());
            }) 
        }
    } 
    
}