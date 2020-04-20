import { TOGGLE_VIEW, TOGGLE_AUTOPLAY, TOGGLE_PICTURES, TOGGLE_VIDEOS, TOGGLE_SORT, MOBILE_SEARCH, MOBILE_SETTINGS} from './index';

/** 
 * toggle between grid view = more images with the same size
 * */ 
function toggleView(view) {
    return {
        type: TOGGLE_VIEW,
        view
    };
}

/**
 *  sort posts by flag
 * */ 
function toggleSort(sortposts) {
    return {
        type: TOGGLE_SORT,
        sortposts
    };
}

/**
 * show videos
 * */ 
function toggleVideos(videos) {
    return {
        type: TOGGLE_VIDEOS,
        videos
    };
}

/**
 *  show pictures
 * */ 
function togglePictures(pictures) {
    return {
        type: TOGGLE_PICTURES,
        pictures
    };
}

/**
 *  autoplay videos or not
 * */ 
function toggleAutoplay(autoplay) {
    return {
        type: TOGGLE_AUTOPLAY,
        autoplay
    };
}

/**
 *  open/close the mobile searchbar
 * */ 
export function openMobileSearch() {
    return {
        type: MOBILE_SEARCH
    }
    
}


/**
 * open/close the mobile settings menu
 * */ 
export function openMobileSettings() {
    return {
        type: MOBILE_SETTINGS
    }
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
                //dispatch(sortPosts(flag));
                break;
            case "gridview":
                dispatch(toggleView(flag));
                break;
            default:
                return;
        }
    };
}
