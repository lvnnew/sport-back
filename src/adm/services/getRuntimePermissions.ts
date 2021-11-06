import * as R from 'ramda';
import {getBaseServices} from './context';
import {getAdditionalServices} from './AdditionalServices';

export interface RuntimePermission {
  id: string;
  service: string;
  name: string;
}

export const getRuntimeServicePermissions = (): RuntimePermission[] => {
  const services = getBaseServices(() => {
    throw new Error('Not supposed to be called');
  });

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

export const getAdditionalPermissions = (): RuntimePermission[] => {
  const services = getAdditionalServices(() => {
    throw new Error('Not supposed to be called');
  });

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

export const getRuntimePermissions = (): RuntimePermission[] => [
  ...getRuntimeServicePermissions(),
  ...getAdditionalPermissions(),
];
