import {
    FETCH_ALL_TABLES_ERROR,
    FETCH_ALL_TABLES_REQUEST,
    FETCH_ALL_TABLES_SUCCESS,
    FILTER_TABLE
} from "./constants";


const defaultState = {
    tables: [],
    tablesFiltered: [],
    error: null,
    loading: false,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: { type: any; payload: any; }) => {


    switch(action.type) {

        case FETCH_ALL_TABLES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_ALL_TABLES_SUCCESS:
            return {
                ...state,
                loading: false,
                tables: action.payload
            }

        case FETCH_ALL_TABLES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }


            case FILTER_TABLE:
                return {
                    ...state,
                    tablesFiltered: action.payload,
                  
                }

        default :
            return state
    }
}
