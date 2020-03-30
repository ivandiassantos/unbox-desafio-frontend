const defaultState = {
    loggedIn: false,
    register: false,
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'AUTHENTICATE':
            console.log('Action: ', action);
            return {
                ...state,
                loggedIn: true,
            }
        case 'REGISTER':
            if (!action.response.hasError) {
                return {
                    ...state,
                    register: true,
                }
            }
        default:
            return state;
    }
}