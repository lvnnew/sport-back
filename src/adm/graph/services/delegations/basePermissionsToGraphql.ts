import {DelegationsService} from '../../../services/DelegationsService/DelegationsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const delegationsBasePermissionToGraphql: Partial<PermissionToGraphql<DelegationsService>> = {
  meta: '_allDelegationsMeta',
  get: 'Delegation',
  all: 'allDelegations',
  create: 'createDelegation',
  update: 'removeDelegation',
  delete: 'updateDelegation',
};

export default delegationsBasePermissionToGraphql;
