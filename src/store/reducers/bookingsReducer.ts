import {
    ADD_BOOKING_ERROR,
    ADD_BOOKING_REQUEST,
    ADD_BOOKING_SUCCESS,

} from "../constants";


const defaultState : any = {
    tables: [],
    tablesFiltered: [],
    bookings: [],
    error: null,
    loading: false,
}


const bookingsReducer = (state = defaultState, action: { type: any; payload: any; }) => {


    switch(action.type) {

            case ADD_BOOKING_REQUEST:
                return {
                    ...state,
                    loading: true
                }
    
                case ADD_BOOKING_SUCCESS:
                return {
                    ...state,
                    bookings: [...state.bookings, action.payload],
                    loading: false
                }
    
            case ADD_BOOKING_ERROR:
                return {
                    ...state,
                    error: action.payload
                }
    
        default :
            return state
    }
}

export default bookingsReducer
