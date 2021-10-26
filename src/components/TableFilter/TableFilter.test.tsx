import { render, screen, fireEvent, within } from '../../testUtils';
import userEvent from '@testing-library/user-event';
import TableFilter from '../TableFilter/TableFilter';

describe('TableFilter', () => {
  test('clicking on Select will show 3 Locations', () => {
    // Arrange
    render(<TableFilter />);

    // Act
    userEvent.click(getByRole('combobox', { name: /select a table/i }));

    await userEvent.click(screen.getByText('Patio'));
    // Assert

    expect(screen.getByLabelText('Select a table')).toBeChecked();
  });
});
