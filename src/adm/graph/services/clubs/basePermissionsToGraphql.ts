import {ClubsService} from '../../../services/ClubsService/ClubsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const clubsBasePermissionToGraphql:
  Partial<PermissionToGraphql<ClubsService>> = {
    meta: '_allClubsMeta',
    get: 'Club',
    all: 'allClubs',
    create: 'createClub',
    update: 'updateClub',
    delete: 'removeClub',
  };

export default clubsBasePermissionToGraphql;
