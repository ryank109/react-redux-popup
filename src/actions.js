export const CLOSE_POPUP = 'CLOSE_POPUP';
export const OPEN_POPUP = 'OPEN_POPUP';
export const PORTAL_INITIALIZED = 'PORTAL_INITIALIZED';
export const REFRESH_POPUP_POSITION = 'REFRESH_POPUP_POSITION';

export function openPopup(popupId) {
    return {
        popupId,
        type: OPEN_POPUP,
    };
}

export function closePopup(popupId) {
    return {
        popupId,
        type: CLOSE_POPUP,
    };
}

export function portalInitialized() {
    return {
        type: PORTAL_INITIALIZED,
    };
}

export function refreshPopupPosition() {
    return { type: REFRESH_POPUP_POSITION };
}
