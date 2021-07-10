import dayjs from 'dayjs/esm';
import utc from 'dayjs/esm/plugin/utc';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';

dayjs.extend(advancedFormat);
dayjs.extend(utc);

describe('dayjs', () => {
  it('should format date', () => {
    const result = dayjs('2018-10-21', 'YYYY-MM-DD').format('DD/MM/YYYY');

    expect(result).toBe('21/10/2018');
  });
});

describe('dayjs with advancedFormat', () => {
	it('should format date as advancedFormat', () => {
    const result = dayjs('2018-10-21', 'YYYY-MM-DD').format('Q Do X');

    expect(result).toBe('4 21st 1540072800');
	});
});

describe('dayjs with utc', () => {
	it('should format date as utc', () => {
    const result = dayjs.utc('2018-10-21', 'YYYY-MM-DD').format();

    expect(result).toBe('2018-10-21T00:00:00Z');
	});
});
