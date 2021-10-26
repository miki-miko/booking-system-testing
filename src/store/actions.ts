import axios from 'axios'
import { tableI } from '../components/TableFilter/TableFilter';
import {
    FETCH_ALL_TABLES_ERROR,
    FETCH_ALL_TABLES_REQUEST,
    FETCH_ALL_TABLES_SUCCESS,
    DELETE_TABLE_ERROR,
    DELETE_TABLE_REQUEST,
    DELETE_TABLE_SUCCESS,
    ADD_TABLE_ERROR,
    ADD_TABLE_REQUEST,
    ADD_TABLE_SUCCESS,
    FILTER_TABLE,
    DISCARD_ERROR,
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


export const addTable = (table: any) => {
    return async (dispatch: any) => {
        dispatch({type: ADD_TABLE_REQUEST})
        try {
            const { data } = await axios.post('http://localhost:5000/tables', table)
            dispatch({type: ADD_TABLE_SUCCESS, payload: data})
        } catch (e) {
            dispatch({type:ADD_TABLE_ERROR, payload: e })
        }
    }
}

export const deleteTable = (id: number) => {
    return async (dispatch: (arg0: { type: string; payload?: unknown; }) => void) => {
        dispatch({type: DELETE_TABLE_REQUEST})
        try {

            const {status} = await axios.delete(`http://localhost:5000/tables/${id}`)
            if ( status === 200) {
                dispatch({type: DELETE_TABLE_SUCCESS, payload: id})
              } else {
                throw new Error ('Delete Failed')
              }
           
        } catch (e) {
            dispatch({type:DELETE_TABLE_ERROR, payload: e })
        }
    }
}


export const discardError = () => ({
    type: DISCARD_ERROR,
})
