import {applyMiddleware, createStore, compose} from "redux";
import thunk from 'redux-thunk'

import tablesReducer from './tablesReducer'

export const defaultStore = {
    tables: [],
    tablesFiltered: [],
    error: null,
    loading: false,
}

export type RootState = ReturnType<typeof tablesReducer>


export const store = createStore(tablesReducer, defaultStore, compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()))
