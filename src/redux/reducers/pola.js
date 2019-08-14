const initialState = {
    polaList: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

//manage state 
const pola = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POLA_PENDING':
            return {
                ...state,
                isLoading: true,
                isFulfilled: false,
                isRejected: false,
            };
        case 'GET_POLA_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
            };
        case 'GET_POLA_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                polaList : action.payload.data.result[0].pola
            };
        default:
            return state;
    };

}

export default pola;