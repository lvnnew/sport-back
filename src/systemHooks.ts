/* eslint-disable @babel/no-invalid-this */
import {types} from 'pg';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

// Runs on any start of the system: as api backend, as worker, as cli-command, etc.
export const onStart = () => {
  // To parse date as utc date
  types.setTypeParser(types.builtins.DATE, (val) => dayjs.utc(val).toDate());
  types.setTypeParser(types.builtins.TIMESTAMP, (val) => dayjs.utc(val).toDate());

  types.setTypeParser(types.builtins.INT2, (val) => Number.parseInt(val, 10));
  types.setTypeParser(types.builtins.INT4, (val) => Number.parseInt(val, 10));
  types.setTypeParser(types.builtins.INT8, (val) => Number.parseInt(val, 10));

  // To serialze BigInt as string in json
  if (typeof BigInt.prototype.toJSON !== 'function') {
    // eslint-disable-next-line no-extend-native
    BigInt.prototype.toJSON = function(this: any) {
      return this.toString();
    } as any;
  }
};
