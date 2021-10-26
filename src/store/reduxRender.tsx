import { render, RenderOptions, RenderResult } from '@testing-library/react';

import tablesReducer from './tablesReducer';
import { Provider } from 'react-redux';
import { ReactElement } from 'react';
import { RootState } from './reduxStore';

const defaultTestRootState: RootState = {
  tables: [],
  tablesFiltered: [],
  error: null,
  loading: false,
};

const customRender = (
  ui: ReactElement,
  state: Partial<RootState> = defaultTestRootState,
  renderOptions?: RenderOptions
): RenderResult => {
  // Wrapper for elements
  const Wrapper: React.FC = ({ children }) => {
    // Store with state that can be given by props
    const store: any = configureStore({
      reducer: tablesReducer,
      preloadedState: state,
    });

    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default customRender;

function configureStore(arg0: {
  reducer: (state: any, action: { type: any; payload: any }) => any;
  preloadedState: Partial<any>;
}): any {
  throw new Error('Function not implemented.');
}
