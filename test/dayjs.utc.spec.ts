// The subdirectory "esm" of the installed version of "dayjs" is modified,
// to make necessary modifications to the type definitions.
// No code is modified.

import dayjs from 'dayjs/esm';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';
import customParseFormat from 'dayjs/esm/plugin/customParseFormat';
import utc from 'dayjs/esm/plugin/utc';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(utc);

describe('dayjs with utc', () => {
  it('should create new Dayjs object as utc', () => {
    const testDate = dayjs.utc();
    const testDateAsString = testDate.format();
    const currentDate = new Date();
    const currentDateAsString = `${currentDate.toISOString().substr(0,10)}`;

    expect(testDate.isValid()).toEqual(true);
    expect(testDate.isUTC()).toEqual(true);
    expect(testDate.format('YYYY-MM-DD')).toEqual(currentDateAsString);
    expect(testDateAsString.substr(10, 1)).toEqual('T');
    expect(testDate.format().substr(19)).toMatch(/(\+00:00|Z)/);
  });

  it('should parse string to utc', () => {
    const testDate = dayjs.utc('08.10.2018', "DD.MM.YYYY");

    expect(testDate.isValid()).toEqual(true);
    expect(testDate.format('YYYY-MM-DD')).toEqual('2018-10-08');
  });

  it('should convert locale date to utc', () => {
    const testDate = dayjs().utc();
    const testDateString = testDate.format();

    expect(testDate.isUTC()).toEqual(true);
    expect(testDateString.substr(10, 1)).toEqual('T');
    expect(testDate.format().substr(19)).toMatch(/(\+00:00|Z)/);
  });
});
