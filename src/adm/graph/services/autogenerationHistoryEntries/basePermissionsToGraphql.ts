import {AutogenerationHistoryEntriesService} from '../../../services/AutogenerationHistoryEntriesService/AutogenerationHistoryEntriesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const autogenerationHistoryEntriesBasePermissionToGraphql: Partial<PermissionToGraphql<AutogenerationHistoryEntriesService>> = {
  meta: '_allAutogenerationHistoryEntriesMeta',
  get: 'AutogenerationHistoryEntry',
  all: 'allAutogenerationHistoryEntries',
  create: 'createAutogenerationHistoryEntry',
  update: 'removeAutogenerationHistoryEntry',
  delete: 'updateAutogenerationHistoryEntry',
};

export default autogenerationHistoryEntriesBasePermissionToGraphql;
