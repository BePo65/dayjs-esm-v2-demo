import dayjs from 'dayjs/esm';
import advancedFormat from 'dayjs/esm/plugin/advancedFormat';
import utc from 'dayjs/esm/plugin/utc';

dayjs.extend(advancedFormat);

console.log('** Demo Dayjs using "import from \'dayjs/esm\'" **')

const now = dayjs();
console.log(`dayjs(): ${now}`);

const nowFormatted = dayjs().format();
console.log(`dayjs().format(): ${nowFormatted}`);

const demoIso = dayjs('2018-04-04T16:00:00.000Z');
console.log(`dayjs(isostring): ${demoIso}`);

const demoAdvancedFormat = dayjs().format('Q Do k kk X x');
console.log(`advancedFormat: ${demoAdvancedFormat}`);

// from here on:use utc
dayjs.extend(utc);

const formatUtc = dayjs.utc().format();
console.log(`dayjs.utc().format(): ${formatUtc}`);
