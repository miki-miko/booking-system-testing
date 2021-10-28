import { render } from './testUtils';
import user from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  test('clicking on + button will show the Form modal', async () => {
    // Arrange
    const { getByRole, getByText } = render(<App />);

    const addButton = getByRole('button', {
      name: /\+/i,
    });

    user.click(addButton);

    const form = getByText(/add new table/i);

    expect(form).toBeInTheDocument();
  });
});
