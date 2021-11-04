import { getByText, render, screen, waitFor } from '../../test-utils/testUtils';
import user from '@testing-library/user-event';

import Home from './Home';

// "name": "Table 3",
// "capacity": 5,

describe('Home', () => {
  test('should display relevant Table information fetched from the server', async () => {
    // Arrange
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {}; // provide an empty implementation for window.alert

    render(<Home />);
    const card = await screen.findByTestId('card');
    waitFor(() => expect(card).toBeInTheDocument());

    window.alert = jsdomAlert; // restore the jsdom alert
  });

  test('should delete a Table', async () => {
    render(<Home />, { routeHistory: ['/tables/1'] });

    const tableCardName = await screen.findByText('Table 1');

    expect(tableCardName).toBeInTheDocument();
  });
});

// test('should display relevant Table  fetched from the server', () => {
//   // Arrange
//   const jsdomAlert = window.alert; // remember the jsdom alert
//   window.alert = () => {}; // provide an empty implementation for window.alert

//   render(<Home />);
//   const button = screen.getByRole('button', {
//     name: /\+/i,
//   });
//   waitFor(() => expect(button).toBeInTheDocument());

//   window.alert = jsdomAlert; // restore the jsdom alert
// });
