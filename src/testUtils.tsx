import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import tablesReducer from '../src/store/tablesReducer';
import { ReactElement, JSXElementConstructor, ReactNode } from 'react';
import { RootState } from './store/reduxStore';

interface wrapperProps {
  children?: ReactNode;
}

const defaultTestRootState: RootState = {
  tables: [],
  tablesFiltered: [],
  error: null,
  loading: false,
};

function render(
  ui: ReactElement<any, string | JSXElementConstructor<any>>,
  {
    preloadedState: RootState = defaultTestRootState,
    store = configureStore({
      reducer: tablesReducer,
      preloadedState: defaultTestRootState,
    }),
    ...renderOptions
  } = {}
) {
  const Wrapper = ({ children }: wrapperProps) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
