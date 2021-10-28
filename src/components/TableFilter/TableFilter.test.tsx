import { render, waitFor, within } from '../../testUtils';
import user from '@testing-library/user-event';

import TableFilter from '../TableFilter/TableFilter';

describe('TableFilter', () => {
  test('clicking on Select, then clicking on rendered Option', () => {
    const { getByRole } = render(<TableFilter />);

    const select = getByRole('combobox', {
      name: /form-select/i,
    });

    expect(select).toBeInTheDocument();

    user.click(select);

    waitFor(() => {
      user.selectOptions(
        select,
        within(select).getByRole('option', { name: 'Patio' })
      );
    });

    waitFor(() => {
      const option = getByRole('option', { name: 'Patio' });
      expect(option).toBeInTheDocument();
    });
  });
});
