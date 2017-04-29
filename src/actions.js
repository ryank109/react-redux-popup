export const CLOSE_POPUP = 'CLOSE_POPUP';
export const OPEN_POPUP = 'OPEN_POPUP';
export const REFRESH_POPUP_POSITION = 'REFRESH_POPUP_POSITION';
export const UPDATE_POPUP_PROPS = 'UPDATE_POPUP_PROPS';

export function openPopup(popupId, rect) {
    return {
        rect,
        popupId,
        type: OPEN_POPUP
    };
}

export function closePopup(popupId) {
    return {
        popupId,
        type: CLOSE_POPUP
    };
}

export function refreshPopupPosition() {
    return { type: REFRESH_POPUP_POSITION };
}

export function updatePopupProps(popupId, props) {
    return {
        popupId,
        props,
        type: UPDATE_POPUP_PROPS
    };
}
