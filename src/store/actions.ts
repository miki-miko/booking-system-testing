import axios from 'axios'
import { tableI } from '../components/TableFilter/TableFilter';
import {
    FETCH_ALL_TABLES_ERROR,
    FETCH_ALL_TABLES_REQUEST,
    FETCH_ALL_TABLES_SUCCESS,
    FILTER_TABLE
} from "./constants";

export const fetchAllTables = () => {
    return async (dispatch: (arg0: { type: string; payload?: unknown; }) => void) => {
        dispatch({type: FETCH_ALL_TABLES_REQUEST})
        try {
            const {data: tables} = await axios.get('http://localhost:5000/tables')
            dispatch({type: FETCH_ALL_TABLES_SUCCESS, payload: tables})
        }
        catch(e) {
            dispatch({type:FETCH_ALL_TABLES_ERROR, payload: e })
        }
    }
}

export const filterTables = (filteredTable: tableI[]) => {
    return (dispatch: (arg0: { type: string; payload?: unknown; }) => void) =>
    dispatch({type: FILTER_TABLE, payload: filteredTable})

}
