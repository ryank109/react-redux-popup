import { OPEN_POPUP, CLOSE_POPUP } from 'rrp/popup/actions';

export default function popup(state = {}, action) {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                ...state,
                [action.popupId]: true,
                [`${action.popupId}.container`]: action.container
            };
        case CLOSE_POPUP:
            return {
                ...state,
                [action.popupId]: false,
                [`${action.popupId}.container`]: null
            };
        default:
            return state;
    }
}
