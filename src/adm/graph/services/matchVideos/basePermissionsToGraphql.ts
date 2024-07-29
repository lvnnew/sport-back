import {MatchVideosService} from '../../../services/MatchVideosService/MatchVideosService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchVideosBasePermissionToGraphql:
  Partial<PermissionToGraphql<MatchVideosService>> = {
    meta: '_allMatchVideosMeta',
    get: 'MatchVideo',
    all: 'allMatchVideos',
    create: 'createMatchVideo',
    update: 'updateMatchVideo',
    delete: 'removeMatchVideo',
  };

export default matchVideosBasePermissionToGraphql;
