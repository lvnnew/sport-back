import matchVideosBasePermissionToGraphql from './basePermissionsToGraphql';
import {MatchVideosService} from '../../../services/MatchVideosService/MatchVideosService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchVideosPermissionToGraphql:
  Partial<PermissionToGraphql<MatchVideosService>> = {
    ...matchVideosBasePermissionToGraphql,
  };

export default matchVideosPermissionToGraphql;
