import { OPEN_POPUP, CLOSE_POPUP, UPDATE_POPUP_PROPS } from 'rrp/actions';

export default function popup(state = {}, action) {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                [action.popupId]: true,
                [`${action.popupId}_rect`]: action.rect
            };
        case CLOSE_POPUP:
            const keys = Object.keys(state);
            let newState = {};
            keys.forEach(key => {
                if (key !== action.popupId
                    && key !== `${action.popupId}_rect`
                    && key !== `${action.popupId}_props`) {
                    newState[key] = state[key];
                }
            });
            return newState;
        case UPDATE_POPUP_PROPS:
            return {
                ...state,
                [`${action.popupId}_props`]: action.props
            };
        default:
            return state;
    }
}
