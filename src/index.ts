import dayjs from 'dayjs/esm';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';
import utc from 'dayjs/esm/plugin/utc';
import arraySupport from 'dayjs/esm/plugin/arraySupport';

dayjs.extend(advancedFormat);
dayjs.extend(utc);
dayjs.extend(arraySupport);

console.log('** Demo Dayjs using "import from \'dayjs/esm\'" **')

const now = dayjs();
console.log(`dayjs(): ${now}`);

const nowFormatted = dayjs().format();
console.log(`dayjs().format(): ${nowFormatted}`);

const demoIso = dayjs('2018-04-04T16:00:00.000Z');
console.log(`dayjs(isostring): ${demoIso}`);

const demoAdvancedFormat = dayjs().format('Q Do k kk X x');
console.log(`advancedFormat: ${demoAdvancedFormat}`);

const formatUtc = dayjs.utc().format();
console.log(`dayjs.utc().format(): ${formatUtc}`);

const formatUtcFromArray = dayjs.utc([2010, 1, 14, 15, 25, 50, 125]).format();
console.log(`dayjs.utc([...]).format(): ${formatUtcFromArray}`);
