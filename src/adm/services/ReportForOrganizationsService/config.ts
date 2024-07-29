/* eslint-disable quote-props,comma-dangle,@typescript-eslint/ban-types */
import Entity from '../../../types/Entity';
import {ServiceConfig} from '../types';

// DO NOT EDIT! THIS IS GENERATED FILE

const config: ServiceConfig = {
  idType: 'int',
  autogeneratedStringId: false,
  auditable: true,
  withSearch: true,
  externalSearch: false,
  dateFields: [
    'lastUpdated'
  ],
  otherFields: [
    'id',
    'title',
    'competitionId',
    'organizatorId'
  ],
  forbiddenForUserFields: [
    'lastUpdated'
  ],
  entityTypeId: Entity.ReportForOrganization,
};

export default config;
