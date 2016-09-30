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

    it('should return update popup action', function() {
        const popupId = 'popupId1';
        expect(Actions.updatePopupProps(popupId, { newProp: 'val1' })).toEqual({
            popupId,
            props: { newProp: 'val1' },
            type: Actions.UPDATE_POPUP_PROPS
        });
    })

    it('should return update scroll position action', function() {
        const x = 10;
        const y = 11;
        expect(Actions.updateScrollPosition(x, y)).toEqual({
            x,
            y,
            type: Actions.UPDATE_POPUP_SCROLL_POSITION
        });
    })
});
