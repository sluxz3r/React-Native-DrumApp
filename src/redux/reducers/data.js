const initialState = {
    dataList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const datauser = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_DATA_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_DATA_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                dataList : action.payload.data.result
            };
        default:
            return state;
    };

}

export default datauser