import {OrganizatorsService} from '../../../services/OrganizatorsService/OrganizatorsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const organizatorsBasePermissionToGraphql:
  Partial<PermissionToGraphql<OrganizatorsService>> = {
    meta: '_allOrganizatorsMeta',
    get: 'Organizator',
    all: 'allOrganizators',
    create: 'createOrganizator',
    update: 'updateOrganizator',
    delete: 'removeOrganizator',
  };

export default organizatorsBasePermissionToGraphql;
