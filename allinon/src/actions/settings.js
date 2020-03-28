import { TOGGLE_VIEW, TOGGLE_AUTOPLAY, TOGGLE_PICTURES, TOGGLE_VIDEOS, TOGGLE_SORT } from './index';
import { sortPosts } from './filter';

function toggleView(view) {
    return {
        type: TOGGLE_VIEW,
        view
    };
}

function toggleSort(sortposts) {
    return {
        type: TOGGLE_SORT,
        sortposts
    };
}

function toggleVideos(videos) {
    return {
        type: TOGGLE_VIDEOS,
        videos
    };
}

function togglePictures(pictures) {
    return {
        type: TOGGLE_PICTURES,
        pictures
    };
}

function toggleAutoplay(autoplay) {
    return {
        type: TOGGLE_AUTOPLAY,
        autoplay
    };
}


export function toggleSettings(setting, flag) {
    return (dispatch) => {
        switch (setting) {
            case "autoplay":
                dispatch(toggleAutoplay(flag));
                break;
            case "pictures":
                dispatch(togglePictures(flag));
                break;
            case "videos":
                dispatch(toggleVideos(flag));
                break;
            case "sortposts":
                dispatch(toggleSort(flag));
                dispatch(sortPosts(flag));
                break;
            case "gridview":
                dispatch(toggleView(flag));
                break;
            default:
                return;
        }
    };
}
