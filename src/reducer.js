import { OPEN_POPUP, CLOSE_POPUP, UPDATE_POPUP_PROPS, CLEAN_POPUP_STATE } from 'rrp/actions';

export default function popup(state = {}, action) {
    let keys;
    let newState;
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                [action.popupId]: true,
                [`${action.popupId}_rect`]: action.rect
            };
        case CLOSE_POPUP:
            keys = Object.keys(state);
            newState = {};
            keys.forEach(key => {
                if (key !== action.popupId) {
                    newState[key] = state[key];
                }
            });
            return newState;
        case UPDATE_POPUP_PROPS:
            return {
                ...state,
                [`${action.popupId}_props`]: action.props
            };
        case CLEAN_POPUP_STATE:
            keys = Object.keys(state);
            newState = {};
            keys.forEach(key => {
                if (key !== action.popupId
                    && key !== `${action.popupId}_rect`
                    && key !== `${action.popupId}_props`) {
                    newState[key] = state[key];
                }
            });
            return newState;
        default:
            return state;
    }
}
