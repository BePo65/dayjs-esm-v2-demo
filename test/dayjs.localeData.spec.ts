import dayjs from 'dayjs/esm';
import localeData from 'dayjs/esm/plugin/localeData';

dayjs.extend(localeData);

describe('dayjs with localeData', () => {
  it('should get week day names', () => {
    const result = dayjs.weekdays();

    expect(result.length).toEqual(7);
  });

  it('should get locale name of month of dayjs object', () => {
    const baseDate = dayjs();
    const testDate = dayjs('2021-06-14');
    const result = baseDate.localeData().months(testDate);

    expect(result).toEqual('June');
  });

  it('should get locale name of months for dayjs instance', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.localeData().months();

    expect(result.length).toEqual(12);
  });
});
