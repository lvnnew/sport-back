import clubsBasePermissionToGraphql from './basePermissionsToGraphql';
import clubsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {ClubsService} from '../../../services/ClubsService/ClubsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const clubsPermissionToGraphql:
  Partial<PermissionToGraphql<ClubsService>> = {
    ...clubsBasePermissionToGraphql,
    ...clubsAdditionalPermissionToGraphql,
  };

export default clubsPermissionToGraphql;
