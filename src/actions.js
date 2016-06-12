export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';
export const UPDATE_POPUP_PROPS = 'UPDATE_POPUP_PROPS';
export const UPDATE_POPUP_SCROLL_POSITION = 'UPDATE_POPUP_SCROLL_POSITION';

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
    }
}

export function updatePopupProps(popupId, props) {
    return {
        popupId,
        props,
        type: UPDATE_POPUP_PROPS
    };
}

export function updateScrollPosition(x, y) {
    return {
        x,
        y,
        type: UPDATE_POPUP_SCROLL_POSITION
    };
}
