import { TOGGLE_VIEW, TOGGLE_AUTOPLAY, TOGGLE_PICTURES, TOGGLE_VIDEOS, TOGGLE_SORT } from '../actions/index';



export function settingsReducer(state = {
    autoplay: true,
    videos: true,
    pictures: true,
    gridview: 'big',
    sortposts: 'new'
}, action) {
    switch (action.type) {
        case TOGGLE_AUTOPLAY:
            return Object.assign({}, state, {
                autoplay: action.autoplay
            });
        case TOGGLE_VIEW:
            return Object.assign({}, state, {
                gridview: action.view
            });

        case TOGGLE_SORT:
            return Object.assign({}, state, {
                sortposts: action.sortposts
            });

        case TOGGLE_VIDEOS:
            if (state.pictures !== false) {
                return Object.assign({}, state, {
                    videos: action.videos
                });

            };
            break;

        case TOGGLE_PICTURES:
            if (state.videos !== false) {
                return Object.assign({}, state, {
                    pictures: action.pictures
                });
            };
            break;

        default:
            return state;
    }
}

