import {types} from 'pg';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const initPgParsers = () => {
  // To parse date as utc date
  types.setTypeParser(types.builtins.DATE, (val) => dayjs.utc(val).toDate());
  types.setTypeParser(types.builtins.TIMESTAMP, (val) => dayjs.utc(val).toDate());

  types.setTypeParser(types.builtins.INT2, (val) => Number.parseInt(val, 10));
  types.setTypeParser(types.builtins.INT4, (val) => Number.parseInt(val, 10));
  types.setTypeParser(types.builtins.INT8, (val) => Number.parseInt(val, 10));
};

export default initPgParsers;
