import { render, screen, fireEvent, within } from '../../testUtils';

import Table from './Table';

test('testing a click event', () => {
  // Arrange
  const handleOpen = jest.fn();

  // Act
  render(
    <Table
      table={{
        id: 0,
        name: '',
        img: '',
        capacity: 0,
        isAvailable: false,
        location: '',
      }}
    />
  );

  // Act
  const detailButton = screen.getByRole('button', { name: /Details/i });

  expect(screen.getByRole('button', { name: /Details/i })).toBeInTheDocument();

  fireEvent.click(detailButton);

  const dialog = screen.getByRole('dialog');

  expect(within(dialog).getByText(/location: Bar/i)).toBeInTheDocument();

  // fireEvent.click(detailButton);

  // // Assert
  // expect(handleOpen).toHaveBeenCalledTimes(1);
});
