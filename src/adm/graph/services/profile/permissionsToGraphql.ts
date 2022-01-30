import {PermissionToGraphql} from '../../permissionsToGraphql';
import {ProfileService} from '../../../services/ProfileService/ProfileService';

const profilePermissionToGraphql: Partial<PermissionToGraphql<ProfileService>> = {
  getManagerPermissions: 'getManagerPermissions',
  getPermissionsWithMeta: 'getPermissionsWithMeta',
  getPermissionsOfManagerWithMeta: 'getPermissionsOfManagerWithMeta',
};

export default profilePermissionToGraphql;
