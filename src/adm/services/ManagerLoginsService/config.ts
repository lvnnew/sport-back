/* eslint-disable quote-props,comma-dangle,@typescript-eslint/ban-types */
import {ServiceConfig} from '../types';

// DO NOT EDIT! THIS IS GENERATED FILE

const config: ServiceConfig = {
  idType: 'int',
  autogeneratedStringId: false,
  auditable: true,
  withSearch: true,
  externalSearch: false,
  dateFields: [],
  otherFields: [
    'id',
    'login',
    'passwordHash',
    'managerId'
  ],
  forbiddenForUserFields: [],
  entityTypeId: 'managerLogin',
};

export default config;
