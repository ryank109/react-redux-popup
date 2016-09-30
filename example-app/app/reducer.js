export const DO_SOMETHING = 'DO_SOMETHING';

export default function doSomething(state = {}, action) {
    switch (action.type) {
        case DO_SOMETHING:
            return {
                ...state,
                isActivated: true
            };
        default:
            return state;
    }
}
