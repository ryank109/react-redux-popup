import expect from 'expect';
import { closePopup, openPopup, cleanPopup } from 'rrp/actions';
import reducer from 'rrp/reducer';

describe('reducer', function() {
    it('should return open popup state with OPEN_POPUP action', function() {
        const state = {};
        const action1 = openPopup('1', {});
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            '1': true,
            '1_rect': {}
        });

        // try the same action with same popup id
        nextState = reducer(state, action1);
        expect(nextState).toEqual({
            '1': true,
            '1_rect': {}
        });

        const action2 = openPopup('2');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            '1': true,
            '1_rect': {},
            '2': true,
            '2_rect': undefined
        });
    });

    it('should return close popup state with CLOSE_POPUP action', function() {
        const state = {
            '1': true,
            '1_rect': {},
            '2': true,
            '2_rect': undefined
        };
        const action1 = closePopup('1');
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            '1_rect': {},
            '2': true,
            '2_rect': undefined
        });

        const action2 = closePopup('NotInState');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            '1_rect': {},
            '2': true,
            '2_rect': undefined
        });

        const action3 = closePopup('2');
        nextState = reducer(nextState, action3);
        expect(nextState).toEqual({
            '1_rect': {},
            '2_rect': undefined
        });
    });

    it('should clean up popup state with CLEAN_POPUP_STATE action', function() {
        const state = {
            '1': true,
            '1_rect': {},
            '1_props': {},
            '2': true,
            '2_rect': undefined
        };

        const action1 = cleanPopup('1');
        let nextState = reducer(state, action1);
        expect(nextState).toEqual({
            '2': true,
            '2_rect': undefined
        });

        const action2 = cleanPopup('NotInState');
        nextState = reducer(nextState, action2);
        expect(nextState).toEqual({
            '2': true,
            '2_rect': undefined
        });

        const action3 = cleanPopup('2');
        nextState = reducer(nextState, action3);
        expect(nextState).toEqual({});
    });
});
