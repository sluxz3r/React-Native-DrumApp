const initialState = {
    useridList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const datauserid = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERID_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_USERID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_USERID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                useridList : action.payload.data.result
            };
            //Update Book By ID
        // case 'UPDATE_SCORE_PENDING':
        //     return {
        //         ...state,
        //         isLoading: true,
        //         isFulfilled: false,
        //         isRejected: false
        //     };
        // case 'UPDATE_SCORE_REJECTED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isRejected: true
        // };
        // case 'UPDATE_SCORE_FULFILLED':
        //     return {
        //         ...state,
        //         isLoading: false,
        //         isFulfilled: true,
        //         useridList: action.payload.data
        // };
        default:
            return state;
    };

}

export default datauserid