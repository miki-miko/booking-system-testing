import { render, screen, fireEvent, waitFor } from '../../testUtils';
import user from '@testing-library/user-event';

import App from '../../App';
import TableForm from './TableForm';

function clickSubmitButton() {
  user.click(screen.getByRole('button', { name: /Submit/i }));
}

describe('TableForm', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    onClick.mockClear();
    render(
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
  });

  test('onSubmit is called when all the fields pass validation', async () => {
    // const { getByPlaceholderText } = render(
    //   <App>
    //     <TableForm
    //       show={false}
    //       handleClose={function (): void {
    //         throw new Error('Function not implemented.');
    //       }}
    //       onInputChange={undefined}
    //       addPost={onClick}
    //     />
    //   </App>
    // );

    const addButton = screen.getByRole('button', {
      name: /\+/i,
    });

    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    const form = screen.getByText(/add new table/i);

    expect(form).toBeInTheDocument();

    const tableNameInput = screen.getByPlaceholderText('Enter a table name');
    const tableLocationInput = screen.getByPlaceholderText(
      'Enter the location name'
    );
    const tableImageInput = screen.getByPlaceholderText('Enter the image link');
    const tableCapacityInput = screen.getByPlaceholderText(
      'Enter the capacity of the table'
    );

    expect(tableNameInput).toBeInTheDocument();

    user.type(tableNameInput, 'Table 7');
    user.type(tableLocationInput, 'Patio');
    user.type(
      tableImageInput,
      'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    );
    user.type(tableCapacityInput, '6');

    clickSubmitButton();

    waitFor(() => expect(onClick).toHaveBeenCalled());
  });

  it('has 3 required fields on first step', async () => {
    // const { getByPlaceholderText } = render(
    //   <App>
    //     <TableForm
    //       show={false}
    //       handleClose={function (): void {
    //         throw new Error('Function not implemented.');
    //       }}
    //       onInputChange={undefined}
    //       addPost={onClick}
    //     />
    //   </App>
    // );

    const addButton = screen.getByRole('button', {
      name: /\+/i,
    });

    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    const form = screen.getByText(/add new table/i);

    expect(form).toBeInTheDocument();

    const tableNameInput = screen.getByPlaceholderText('Enter a table name');
    const tableLocationInput = screen.getByPlaceholderText(
      'Enter the location name'
    );
    const tableImageInput = screen.getByPlaceholderText('Enter the image link');
    const tableCapacityInput = screen.getByPlaceholderText(
      'Enter the capacity of the table'
    );

    user.type(tableNameInput, '');
    user.type(tableLocationInput, '');
    user.type(tableImageInput, '');
    user.type(tableCapacityInput, '');

    clickSubmitButton();

    await waitFor(() => {
      expect(tableNameInput).toHaveErrorMessage(
        'Please provide a valid table name'
      );
      expect(tableLocationInput).toHaveErrorMessage(
        'Please provide a valid location'
      );
      expect(tableImageInput).toHaveErrorMessage(
        'Please provide a valid image link'
      );
      expect(tableCapacityInput).toHaveErrorMessage(
        'Please provide a valid positive number'
      );
    });
  });
});
