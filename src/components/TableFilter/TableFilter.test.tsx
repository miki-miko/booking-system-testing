import { act, render, waitFor, within } from '../../testUtils';
import user from '@testing-library/user-event';

import TableFilter from '../TableFilter/TableFilter';

describe('TableFilter', () => {
  test('clicking on Select, then clicking on rendered Option', () => {
    const { getByRole, getByLabelText } = render(<TableFilter />, {});

    const select = getByLabelText('form-select-location');
    expect(select).toBeInTheDocument();

    user.click(select);

    waitFor(() =>
      user.selectOptions(
        select,
        within(select).getByRole('option', { name: 'Patio' })
      )
    );

    waitFor(() =>
      expect(getByRole('option', { name: 'Patio' })).toBeInTheDocument()
    );
  });
});
