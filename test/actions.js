import expect from 'expect';
import * as Actions from 'rrp/actions';

describe('actions', function() {
    it('should return open popup action', function() {
        const popupId = 'popupId1';
        const rect = 'rect1';
        expect(Actions.openPopup(popupId, rect)).toEqual({
            popupId,
            rect,
            type: Actions.OPEN_POPUP
        });
    });

    it('should return close popup action', function() {
        const popupId = 'popupId1';
        expect(Actions.closePopup(popupId)).toEqual({
            popupId,
            type: Actions.CLOSE_POPUP
        });
    });
});
