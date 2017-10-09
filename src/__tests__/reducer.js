import { closePopup, portalInitialized, openPopup, refreshPopupPosition } from 'rrp/actions';
import reducer from 'rrp/reducer';

describe('reducer', () => {
    it('should return open popup state with OPEN_POPUP action', () => {
        const state = {};
        const action1 = openPopup('1', {});
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            1: true,
        });

        // try the same action with same popup id
        nextState = reducer(state, action1);
        expect(nextState).toEqual({
            1: true,
        });

        const action2 = openPopup('2');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            1: true,
            2: true,
        });
    });

    it('should refresh popup position', () => {
        const state = {};
        const action = refreshPopupPosition();
        const nextState = reducer(state, action);
        expect(nextState).toEqual({
            refreshPosition: true,
        });
    });

    it('should refresh popup position with refreshPosition state', () => {
        const state = {
            refreshPosition: true,
        };
        const action = refreshPopupPosition();
        const nextState = reducer(state, action);
        expect(nextState).toEqual({
            refreshPosition: false,
        });
    });

    it('should return close popup state with CLOSE_POPUP action', () => {
        const state = {
            1: true,
            2: true,
        };
        const action1 = closePopup('1');
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            2: true,
        });

        const action2 = closePopup('NotInState');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            2: true,
        });

        const action3 = closePopup('2');
        nextState = reducer(nextState, action3);
        expect(nextState).toEqual({});
    });

    it('should set the portal ready flag', () => {
        const state = {
            isPortalReady: false,
        };
        const action = portalInitialized();
        const nextState = reducer(state, action);
        expect(nextState).not.toBe(state);
        expect(nextState).toEqual({
            isPortalReady: true,
        });
    });

    it('should return the default state', () => {
        expect(reducer(undefined, { type: 'unknown_action' })).toEqual({
            isPortalReady: false,
            refreshPosition: false,
        });
    });
});
