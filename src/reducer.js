import {
    CLOSE_POPUP,
    OPEN_POPUP,
    REFRESH_POPUP_POSITION,
    UPDATE_POPUP_PROPS
} from 'rrp/actions';

const reducers = {
    [OPEN_POPUP]: (state, action) => ({
        ...state,
        [action.popupId]: true,
        [`${action.popupId}_rect`]: action.rect
    }),
    [CLOSE_POPUP]: (state, action) => {
        const keys = Object.keys(state);
        const newState = {};
        keys.forEach(key => {
            if (key !== action.popupId
                && key !== `${action.popupId}_rect`
                && key !== `${action.popupId}_props`) {
                newState[key] = state[key];
            }
        });
        return newState;
    },
    [REFRESH_POPUP_POSITION]: state => ({
        ...state,
        refreshPosition: !state.refreshPosition
    }),
    [UPDATE_POPUP_PROPS]: (state, action) => ({
        ...state,
        [`${action.popupId}_props`]: action.props
    })
};

export default function popup(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}
