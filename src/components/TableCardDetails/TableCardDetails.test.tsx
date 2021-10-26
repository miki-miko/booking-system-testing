import { render, screen, fireEvent, within } from '../../testUtils';

import TableCardDetails from './TableCardDetails';

test('testing a click event', () => {
  // Arrange

  // Act
  render(
    <TableCardDetails
      show={false}
      handleClose={function (): void {
        throw new Error('Function not implemented.');
      }}
      table={{
        id: 0,
        name: '',
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
