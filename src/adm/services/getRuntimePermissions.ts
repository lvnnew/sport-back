import * as R from 'ramda';
import {baseServiceConstrictors} from './serviceConstrictors';
import additionalServiceConstrictors from './additionalServiceConstrictors';
import {Context} from './types';

export interface RuntimePermission {
  id: string;
  service: string;
  name: string;
}

export const getRuntimeServicePermissions = (ctx: Context): RuntimePermission[] => {
  const services = R.fromPairs(
    R.toPairs(baseServiceConstrictors)
      .map(([name, constructor]) => [name, constructor(ctx)]),
  );

  return R.flatten(
    R.toPairs(services)
      .map(
        ([service, value]) => R.toPairs(value).map(([method]: R.KeyValuePair<string, any>) => ({
          id: `${service}.${method}`,
          service,
          name: method,
        })),
      ),
  );
};

export const getAdditionalPermissions = (ctx: Context): RuntimePermission[] => {
  const services = R.fromPairs(
    R.toPairs(additionalServiceConstrictors)
      .map(([name, constructor]) => [name, constructor(ctx)]),
  );

  return R.flatten(
    R.toPairs(services)
      .map(
        ([service, value]) => R.toPairs(value).map(([method]: R.KeyValuePair<string, any>) => ({
          id: `${service}.${method}`,
          service,
          name: method,
        })),
      ),
  );
};

export const getRuntimePermissions = (ctx: Context): RuntimePermission[] => [
  ...getRuntimeServicePermissions(ctx),
  ...getAdditionalPermissions(ctx),
];
