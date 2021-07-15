import dayjs from 'dayjs/esm';
import isoWeek from 'dayjs/esm/plugin/isoWeek';

dayjs.extend(isoWeek);

describe('dayjs with isoWeek', () => {
  it('should get iso week of dayjs object', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.isoWeek();

    expect(result).toEqual(24);
  });

  it('should get iso weekday of dayjs object', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.isoWeekday();

    expect(result).toEqual(1);
  });
});
