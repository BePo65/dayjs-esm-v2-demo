// The subdirectory "esm" of the installed version of "dayjs" is modified,
// to make necessary modifications to the type definitions.
// No code is modified.

import dayjs from 'dayjs/esm';
import 'dayjs/esm/locale/de';
import localizedFormat from 'dayjs/esm/plugin/localizedFormat';

dayjs.extend(localizedFormat);

// Set global locale
dayjs.locale('de');

describe('locale', () => {
  it('should get current global locale', () => {
    const result = dayjs.locale();

    expect(result).toEqual('de');
  });

  it('should use global locale to format date', () => {
    const result = dayjs('2018-10-07').format('L');

    expect(result).toEqual('07.10.2018');
  });

  it('should use "en" locale to format date', () => {
    const result = dayjs('2018-10-07').locale('en').format('L');

    expect(result).toEqual('10/07/2018');
  });
});
