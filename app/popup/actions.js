export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

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

export default { openPopup, closePopup };
