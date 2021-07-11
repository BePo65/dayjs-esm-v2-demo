// The subdirectory "esm" of the installed version of "dayjs" is modified,
// to make necessary modifications to the type definitions.
// No code is modified.

import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import arraySupport from 'dayjs/esm/plugin/arraySupport';

dayjs.extend(utc);
dayjs.extend(arraySupport);

describe('dayjs with arraySupport', () => {
  it('should create new Dayjs object', () => {
    const testDate = dayjs([2010, 1, 14, 15, 25, 50, 125]);

    expect(testDate.isValid()).toEqual(true);
    expect(testDate.isUTC()).toEqual(false);
    expect(testDate.format('YYYY-MM-DD')).toEqual('2010-02-14');
  });

  it('should create new Dayjs object with utc', () => {
    const testDate = dayjs.utc([2010, 1, 14, 15, 25, 50, 125]);

    expect(testDate.isValid()).toEqual(true);
    expect(testDate.isUTC()).toEqual(true);
    expect(testDate.format('YYYY-MM-DD')).toEqual('2010-02-14');
    expect(testDate.format().substr(10, 1)).toEqual('T');
    expect(testDate.format().substr(19)).toMatch(/(\+00:00|Z)/);
  });
});
