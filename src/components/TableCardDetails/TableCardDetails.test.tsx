/* eslint-disable */

import { render, screen, fireEvent } from '../../test-utils/testUtils';
import Table from '../Table/Table';
import TableCardDetails from './TableCardDetails';

test('should close the Details dialog modal', () => {
  // Arrange

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
    >
      <TableCardDetails
        show={false}
        handleClose={function (): void {
          throw new Error('Function not implemented.');
        }}
        table={{
          id: 0,
          name: 'Tavolo 96',
          capacity: 0,
          isAvailable: false,
          location: 'Patio',
        }}
      />
    </Table>
  );

  // Act

  const openDetailButton = screen.getByRole('button', { name: 'Details' });

  expect(openDetailButton).toBeInTheDocument();

  fireEvent.click(openDetailButton);

  const closeButton = screen.getByLabelText('Close');

  expect(closeButton).toBeInTheDocument();
});
