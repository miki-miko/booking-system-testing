import { render, screen, fireEvent, waitFor } from '../../testUtils';
import user from '@testing-library/user-event';

import App from '../../App';
import TableForm from './TableForm';

function clickSubmitButton() {
  user.click(screen.getByRole('button', { name: /Submit/i }));
}

describe('TableForm', () => {
  test('onSubmit is called when all the fields pass validation', async () => {
    const onClick = jest.fn();

    const { getByPlaceholderText } = render(
      <App>
        <TableForm
          show={false}
          handleClose={function (): void {
            throw new Error('Function not implemented.');
          }}
          onInputChange={undefined}
          addPost={onClick}
        />
      </App>
    );

    const addButton = screen.getByRole('button', {
      name: /\+/i,
    });

    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    const form = screen.getByText(/add new table/i);

    expect(form).toBeInTheDocument();

    const tableNameInput = getByPlaceholderText('Enter a table name');
    const tableLocationInput = getByPlaceholderText('Enter the location name');
    const tableImageInput = getByPlaceholderText('Enter the image link');
    const tableCapacityInput = getByPlaceholderText(
      'Enter the capacity of the table'
    );

    expect(tableNameInput).toBeInTheDocument();

    user.type(tableNameInput, 'Bruno');
    user.type(tableLocationInput, 'Patio');
    user.type(tableImageInput, '');
    user.type(tableCapacityInput, '6');

    clickSubmitButton();

    waitFor(() => expect(onClick).toHaveBeenCalled());
  });
});
