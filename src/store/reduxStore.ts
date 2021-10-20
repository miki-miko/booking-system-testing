import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk'

import tablesReducer from './tablesReducer'

const defaultStore = {
    tables: [],
    error: null,
    loading: false,
}

export type RootState = ReturnType<typeof tablesReducer>


export const store = createStore(tablesReducer, defaultStore, compose(applyMiddleware(thunk)))
