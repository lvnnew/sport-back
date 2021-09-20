import {PermissionToGraphql} from '../../permissionsToGraphql';
import {ProfileService} from '../../../services/ProfileService/ProfileService';

const milesPermissionToGraphql: Partial<PermissionToGraphql<ProfileService>> = {
  getPermissions: 'getPermissions',
};

export default milesPermissionToGraphql;
