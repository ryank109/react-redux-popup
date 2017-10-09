import * as Actions from 'rrp/actions';

describe('actions', () => {
    it('should return open popup action', () => {
        const popupId = 'popupId1';
        expect(Actions.openPopup(popupId)).toEqual({
            popupId,
            type: Actions.OPEN_POPUP,
        });
    });

    it('should return close popup action', () => {
        const popupId = 'popupId1';
        expect(Actions.closePopup(popupId)).toEqual({
            popupId,
            type: Actions.CLOSE_POPUP,
        });
    });

    it('should return portal initialized action', () => {
        expect(Actions.portalInitialized()).toEqual({
            type: Actions.PORTAL_INITIALIZED,
        });
    });

    it('should return refresh popup action', () => {
        expect(Actions.refreshPopupPosition()).toEqual({
            type: Actions.REFRESH_POPUP_POSITION,
        });
    });
});
