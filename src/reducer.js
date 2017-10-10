import {
    CLOSE_POPUP,
    OPEN_POPUP,
    PORTAL_INITIALIZED,
    REFRESH_POPUP_POSITION,
} from './actions';

const reducers = {
    [OPEN_POPUP]: (state, { popupId }) => ({
        ...state,
        [popupId]: true,
    }),
    [CLOSE_POPUP]: (state, { popupId }) => {
        if (!state[popupId]) { return state; }
        const newState = { ...state };
        delete newState[popupId];
        return newState;
    },
    [PORTAL_INITIALIZED]: state => ({
        ...state,
        isPortalReady: true,
    }),
    [REFRESH_POPUP_POSITION]: state => ({
        ...state,
        refreshPosition: !state.refreshPosition,
    }),
};

const defaultState = {
    isPortalReady: false,
    refreshPosition: false,
};

export default (state = defaultState, action) => {
    const reducer = reducers[action.type];
    return reducer ? reducer(state, action) : state;
};
