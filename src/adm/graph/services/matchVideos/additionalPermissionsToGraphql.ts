import matchVideosBasePermissionToGraphql from './basePermissionsToGraphql';
import matchVideosAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MatchVideosService} from '../../../services/MatchVideosService/MatchVideosService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchVideosPermissionToGraphql:
  Partial<PermissionToGraphql<MatchVideosService>> = {
    ...matchVideosBasePermissionToGraphql,
    ...matchVideosAdditionalPermissionToGraphql,
  };

export default matchVideosPermissionToGraphql;
