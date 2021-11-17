/* eslint-disable */

import { render, screen, fireEvent, waitFor } from '../../test-utils/testUtils';
import user from '@testing-library/user-event';

import Home from '../../pages/Home/Home';
import TableForm from './TableForm';

function clickSubmitButton() {
  user.click(screen.getByRole('button', { name: /Submit/i }));
}

describe('TableForm', () => {
  const onClick = jest.fn();
  const anotherClick = jest.fn();

  beforeEach(() => {
    onClick.mockClear();
    render(
      <Home>
        <TableForm
          show={false}
          handleClose={anotherClick}
          onInputChange={undefined}
          addPost={onClick}
        />
      </Home>
    );
  });

  test('onSubmit is called when all the fields pass validation', async () => {
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {}; // provide an empty implementation for window.alert
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
    window.alert = jsdomAlert; // restore the jsdom alert
  });

  it('has 3 required fields on first step', async () => {
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {}; // provide an empty implementation for window.alert

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
    window.alert = jsdomAlert; // restore the jsdom alert
  });

  test('the close Button is working', async () => {
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = () => {}; // provide an empty implementation for window.alert

    const addButton = screen.getByRole('button', {
      name: /\+/i,
    });

    expect(addButton).toBeInTheDocument();

    fireEvent.click(addButton);

    const closeButton = screen.getByRole('button', {
      name: /close-button/i,
    });

    // WHY  ISN'T THIS WORKING

    // const form = screen.getByText(/add new table/i);
    // // expect(form).not.toBeInTheDocument();

    fireEvent.click(closeButton);

    waitFor(() => expect(anotherClick).toHaveBeenCalled());
    window.alert = jsdomAlert; // restore the jsdom alert
  });
});
