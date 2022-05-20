export const userState = {
    data: null,
    isLoading: false,
    error: null,
};

const userReducer = (oldState = userState, action) => {

    switch (action.type) {
        case 'setUser':
            return { ...oldState, data: action.payload }
        default:
            return oldState;
    }
}

export default userReducer;
