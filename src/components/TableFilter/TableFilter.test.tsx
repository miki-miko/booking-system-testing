import { render, screen, fireEvent, within, getByRole } from '../../testUtils';
import userEvent from '@testing-library/user-event';
import TableFilter from '../TableFilter/TableFilter';

describe('TableFilter', () => {
  test('clicking on Select will show 3 Locations', async () => {
    // Arrange
    render(<TableFilter />);

    // Act
    userEvent.click(
      screen.getByRole('combobox', {
        name: /select a table/i,
      })
    );

    await userEvent.click(screen.getByText('Patio'));

    // Assert

    expect(screen.getByLabelText('Select a table')).toBeChecked();
  });
});
