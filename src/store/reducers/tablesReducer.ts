import {
    ADD_TABLE_ERROR,
    ADD_TABLE_REQUEST,
    ADD_TABLE_SUCCESS,
    DELETE_TABLE_REQUEST,
    DELETE_TABLE_SUCCESS,
    DISCARD_ERROR,
    FETCH_ALL_TABLES_ERROR,
    FETCH_ALL_TABLES_REQUEST,
    FETCH_ALL_TABLES_SUCCESS,
    FILTER_TABLE
} from "../constants";


const defaultState : any = {
    tables: [],
    tablesFiltered: [],
    bookings: [],
    error: null,
    loading: false,
}


const tablesReducer: any = (state = defaultState, action: { type: any; payload: any; }) => {


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

            case ADD_TABLE_REQUEST:
                return {
                    ...state,
                    loading: true
                }
    
                case ADD_TABLE_SUCCESS:
                return {
                    ...state,
                    tables: [...state.tables, action.payload],
                    loading: false
                }
    
            case ADD_TABLE_ERROR:
                return {
                    ...state,
                    error: action.payload
                }
    
            case DELETE_TABLE_REQUEST:
                return {
                    ...state,
                    loading: true
                }
    
            case DELETE_TABLE_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    tables: state.tables.filter((table: { id: number; }) => table.id !== action.payload)
                }

                case DISCARD_ERROR:
                    return {
                    ...state,
                        error:null
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

export default tablesReducer
