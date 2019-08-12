const initialState = {
    drumList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const drum = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DRUM_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_DRUM_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_DRUM_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                drumList : action.payload.data.result
            };
        default:
            return state;
    };

}

export default drum