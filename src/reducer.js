import {
    OPEN_POPUP,
    CLOSE_POPUP,
    UPDATE_POPUP_PROPS,
    UPDATE_POPUP_SCROLL_POSITION
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
    [UPDATE_POPUP_PROPS]: (state, action) => ({
        ...state,
        [`${action.popupId}_props`]: action.props
    }),
    [UPDATE_POPUP_SCROLL_POSITION]: (state, action) => ({
        ...state,
        offsetX: action.x,
        offsetY: action.y
    })
};

export default function popup(state = {}, action) {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
}
