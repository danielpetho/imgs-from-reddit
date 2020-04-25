import { ADD_SUBREDDIT, DELETE_SUBREDDIT} from './index';
import { fetchPosts } from './fetch';
import { emptyPosts, emptySubs, deletePosts } from './filter';

/**
 *  adding a subreddit to the subreddit bar
 */
 function addSubreddit(subreddit) {
    return {
        type: ADD_SUBREDDIT,
        subreddit
    };
}

/**
 * deleting a subreddit from the subreddit bar
 * */ 
export function deleteSubreddit(subid) {
    return {
        type: DELETE_SUBREDDIT,
        subid
    };
}

/**
 * delete the posts which belongs to the subreddit and also delete the the 
 * subreddit from the subreddit-bar
 */
 export function filterPosts(subid, subreddit) {
    return (dispatch) => {
        dispatch(deleteSubreddit(subid));
        dispatch(deletePosts(subreddit));
    }
}

/** 
* processing a request before fetching.
* 1. get all the search values
* 2. delete all posts and delete all subs from the subreddit bar
* 3. fetch from the subreddits
*/
export function processQuery(subs) {
    if(subs.searchValues !== undefined) {
        let subreddits = subs.searchValues.split(" ");
        subreddits = subreddits.filter(e => e !== "");
        return (dispatch) => {
            dispatch(emptySubs());
            dispatch(emptyPosts());
            subreddits.forEach(sub => {
                dispatch(addSubreddit(sub));
                dispatch(fetchPosts(sub, subs.fetchby));
            }) 
        }
    } 
    
}