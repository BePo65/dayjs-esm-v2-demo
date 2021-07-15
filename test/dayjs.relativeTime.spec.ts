import dayjs from 'dayjs/esm';
import relativeTime from 'dayjs/esm/plugin/relativeTime';
import { RelativeTimeOptions } from 'dayjs/esm/plugin/relativeTime';

let options = {thresholds: [
  {
    l: 's',
    r: 44,
    d: 'second'
  }, {
    l: 'm',
    r: 89
  }, {
    l: 'mm',
    r: 44,
    d: 'minute'
  }, {
    l: 'h',
    r: 89
  }, {
    l: 'hh',
    r: 21,
    d: 'hour'
  }, {
    l: 'd',
    r: 35
  }, {
    l: 'dd',
    r: 25,
    d: 'day'
  }, {
    l: 'M',
    r: 45
  }, {
    l: 'MM',
    r: 10,
    d: 'month'
  }, {
    l: 'y',
    r: 17
  }, {
    l: 'yy',
    d: 'year'
  }
]} as RelativeTimeOptions;

dayjs.extend(relativeTime, options);

describe('dayjs with relativeTime', () => {
  it('should get relative time from dayjs object', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.from(dayjs('2021-05-14'));

    expect(result).toEqual('in a month');
  });

  it('should get relative time from dayjs object without suffix', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.from(dayjs('2021-05-14'), true);

    expect(result).toEqual('a month');
  });

  it('should get relative time to dayjs object', () => {
    const testDate = dayjs('2021-06-14');
    const result = testDate.to(dayjs('2021-05-14'));

    expect(result).toEqual('a month ago');
  });
});
