import dayjs from 'dayjs';
import * as R from 'rambda';

export type ServiceUtils = {
  dayjs: typeof dayjs;
  R: typeof R;
}
export const serviceUtils: ServiceUtils = {
  dayjs,
  R,
}
