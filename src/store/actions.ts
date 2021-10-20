import axios from 'axios'
import {

    FETCH_ALL_TABLES_ERROR,
    FETCH_ALL_TABLES_REQUEST,
    FETCH_ALL_TABLES_SUCCESS
} from "./constants";

export const fetchAllTables = () => {
    return async (dispatch: (arg0: { type: string; payload?: unknown; }) => void) => {
        dispatch({type: FETCH_ALL_TABLES_REQUEST})
        try {
            const {data: tables} = await axios.get('http://localhost:3000/tables')
            dispatch({type: FETCH_ALL_TABLES_SUCCESS, payload: tables})
        }
        catch(e) {
            dispatch({type:FETCH_ALL_TABLES_ERROR, payload: e })
        }
    }
}
