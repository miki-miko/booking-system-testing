import { render, screen, fireEvent, waitFor } from '../../test-utils/testUtils';
import user from '@testing-library/user-event';
import renderer from 'react-test-renderer';

import Table from './Table';

function clickBookItButton() {
  user.click(screen.getByLabelText('book-it'));
}

describe('Table', () => {
  test('redirects to /booking works', () => {
    const openFunc = jest.fn();

    const { history } = render(
      <Table
        table={{
          id: 0,
          name: 'Tavolo 96',
          img: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          capacity: 0,
          isAvailable: false,
          location: 'Patio',
        }}
        onClick={openFunc}
      />
    );
    expect(history.location.pathname).toBe('/');
    clickBookItButton();
    waitFor(() => expect(history.location.pathname).toBe('/booking'));
  });

  test('Snapshot Testing', async () => {
    const tree = renderer.create(<Table />);
    expect(tree).toMatchSnapshot();
  });

  test('should open the Table details modal', () => {
    // Arrange
    const openFunc = jest.fn();

    render(
      <Table
        table={{
          id: 0,
          name: 'Tavolo 96',
          img: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          capacity: 0,
          isAvailable: false,
          location: 'Patio',
        }}
        onClick={openFunc}
      />
    );

    // Act
    const detailButton = screen.getByRole('button', { name: 'Details' });

    // Assert
    expect(detailButton).toBeInTheDocument();

    fireEvent.click(detailButton);

    const closeButton = screen.getByRole('button', { name: /close/i });
    // Assert
    expect(closeButton).toBeInTheDocument();
  });

  test('should delete a Table, testing a click event', () => {
    // Arrange

    const deleteFunc = jest.fn();

    render(
      <Table
        table={{
          id: 0,
          name: 'Tavolo 96',
          img: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
          capacity: 0,
          isAvailable: false,
          location: 'Patio',
        }}
        onClick={deleteFunc}
      />
    );

    const logSpy = jest.spyOn(console, 'log');

    // Act
    const deleteButton = screen.getByRole('button', { name: /Delete/i });

    fireEvent.click(screen.getByRole('button', { name: /Delete/i }));

    expect(deleteButton).toBeInTheDocument();
    expect(logSpy).toHaveBeenCalledTimes(1);
  });
});
