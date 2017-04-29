import { closePopup, openPopup, refreshPopupPosition, updatePopupProps } from 'rrp/actions';
import reducer from 'rrp/reducer';

describe('reducer', function() {
    it('should return open popup state with OPEN_POPUP action', function() {
        const state = {};
        const action1 = openPopup('1', {});
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            1: true,
            '1_rect': {}
        });

        // try the same action with same popup id
        nextState = reducer(state, action1);
        expect(nextState).toEqual({
            1: true,
            '1_rect': {}
        });

        const action2 = openPopup('2');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            1: true,
            '1_rect': {},
            2: true,
            '2_rect': undefined
        });
    });

    it('should refresh popup position', function() {
        const state = {};
        const action = refreshPopupPosition();
        const nextState = reducer(state, action);
        expect(nextState).toEqual({
            refreshPosition: true
        });
    });

    it('should refresh popup position with refreshPosition state', function() {
        const state = {
            refreshPosition: true
        };
        const action = refreshPopupPosition();
        const nextState = reducer(state, action);
        expect(nextState).toEqual({
            refreshPosition: false
        });
    });

    it('should return close popup state with CLOSE_POPUP action', function() {
        const state = {
            1: true,
            '1_rect': {},
            2: true,
            '2_rect': undefined
        };
        const action1 = closePopup('1');
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            2: true,
            '2_rect': undefined
        });

        const action2 = closePopup('NotInState');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            2: true,
            '2_rect': undefined
        });

        const action3 = closePopup('2');
        nextState = reducer(nextState, action3);
        expect(nextState).toEqual({});
    });

    it('should update popup properties', function() {
        const state = {};
        const action = updatePopupProps('1', { a: '1', b: '2' });
        const nextState = reducer(state, action);
        expect(nextState).toEqual({
            '1_props': { a: '1', b: '2' }
        });
    });

    it('should update popup properties with existing props', function() {
        const state = {
            '1_props': { something: 'a' }
        };
        const action = updatePopupProps('1', { a: '1', b: '2' });
        const nextState = reducer(state, action);
        expect(nextState).toEqual({
            '1_props': { a: '1', b: '2' }
        });
    });

    it('should return the empty state', function() {
        expect(reducer(undefined, { type: 'unknown_action' })).toEqual({});
    });
});
