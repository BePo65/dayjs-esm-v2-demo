// The subdirectory "esm" of the installed version of "dayjs" is modified,
// to make necessary modifications to the type definitions.
// No code is modified.

import dayjs from 'dayjs/esm';
import 'dayjs/esm/locale/de';

describe('locale', () => {
  it('should use locale to format date', () => {
    const result = dayjs('2018-10-07').locale('de').format('L');

    expect(result).toEqual('07.10.2018');
  });
});
