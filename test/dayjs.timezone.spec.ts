// The subdirectory "esm" of the installed version of "dayjs" is modified,
// to make necessary modifications to the type definitions.
// No code is modified.

import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import timezone from 'dayjs/esm/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

describe('dayjs with timezone', () => {
  it('should create dayjs object with time zone', () => {
    const testDate = dayjs.tz('2014-06-01 12:00', 'America/New_York');

    expect(testDate.isValid()).toEqual(true);
    expect(testDate.format('YYYY-MM-DD')).toEqual('2014-06-01');
    expect(testDate.format('ZZ')).toEqual('-0400');
  });

  it('should change time zone of dayjs object', () => {
    const baseDate = dayjs('2014-06-01 12:00');
    const testDate = baseDate.tz('America/New_York');

    expect(testDate.isValid()).toEqual(true);
    expect(testDate.format('YYYY-MM-DD')).toEqual('2014-06-01');
    expect(testDate.format('ZZ')).toEqual('-0400');
  });

  it('should guess current time zone', () => {
    const currentTimezone = dayjs.tz.guess();

    expect(currentTimezone).toEqual('Europe/Berlin');
  });
});
