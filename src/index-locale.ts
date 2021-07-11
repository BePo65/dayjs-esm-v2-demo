import dayjs from 'dayjs/esm';
import 'dayjs/esm/locale/de';
import localizedFormat from 'dayjs/esm/plugin/localizedFormat';

dayjs.extend(localizedFormat);

// Set global locale
dayjs.locale('de');

console.log('** Demo Dayjs with locale using "import from \'dayjs/esm\'" **')

const now = dayjs();
console.log(`dayjs(): ${now}`);

const currentLocale = dayjs.locale();
console.log(`dayjs.locale() with global locale: ${currentLocale}`);

const nowFormatted = dayjs().format('L');
console.log(`dayjs().format('L') with global locale: ${nowFormatted}`);

const nowFormattedEn = dayjs().locale('en').format('L');
console.log(`dayjs().format('L') with 'en': ${nowFormattedEn}`);
