import { OPEN_POPUP, CLOSE_POPUP } from 'rrp/actions';

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
                if (key !== action.popupId && key !== `${action.popupId}_rect`) {
                    newState[key] = state[key];
                }
            });
            return newState;
        default:
            return state;
    }
}
