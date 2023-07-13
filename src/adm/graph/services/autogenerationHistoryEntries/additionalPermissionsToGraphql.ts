import autogenerationHistoryEntriesBasePermissionToGraphql from './basePermissionsToGraphql';
import autogenerationHistoryEntriesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AutogenerationHistoryEntriesService} from '../../../services/AutogenerationHistoryEntriesService/AutogenerationHistoryEntriesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const autogenerationHistoryEntriesPermissionToGraphql:
  Partial<PermissionToGraphql<AutogenerationHistoryEntriesService>> = {
    ...autogenerationHistoryEntriesBasePermissionToGraphql,
    ...autogenerationHistoryEntriesAdditionalPermissionToGraphql,
  };

export default autogenerationHistoryEntriesPermissionToGraphql;
