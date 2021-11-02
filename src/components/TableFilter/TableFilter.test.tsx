import { act, render, waitFor, within } from '../../testUtils';
import user from '@testing-library/user-event';

import TableFilter from '../TableFilter/TableFilter';
import { tableI } from '../../Interfaces';

const tables: tableI[] = [
  {
    id: 1,
    name: 'Table 1',
    img: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    capacity: 5,
    isAvailable: true,
    location: 'Bar',
  },
  {
    id: 2,
    name: 'Table 2',
    img: 'https://images.pexels.com/photos/238377/pexels-photo-238377.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    capacity: 5,
    isAvailable: true,
    location: 'Patio',
  },
];

describe('TableFilter', () => {
  test('clicking on Select, then clicking on rendered Option', () => {
    const { getByRole, getByLabelText } = render(
      <TableFilter tables={tables} />,
      {}
    );

    const select = getByLabelText('form-select-location');
    expect(select).toBeInTheDocument();

    user.click(select);

    act(() => {
      user.selectOptions(
        select,
        within(select).getByRole('option', { name: 'Patio' })
      );
    });

    act(() => {
      const option = getByRole('option', { name: 'Patio' });
      expect(option).toBeInTheDocument();
    });
  });
});
