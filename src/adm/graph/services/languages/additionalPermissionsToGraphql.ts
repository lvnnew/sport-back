import languagesBasePermissionToGraphql from './basePermissionsToGraphql';
import languagesAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {LanguagesService} from '../../../services/LanguagesService/LanguagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const languagesPermissionToGraphql: Partial<PermissionToGraphql<LanguagesService>> = {
  ...languagesBasePermissionToGraphql,
  ...languagesAdditionalPermissionToGraphql,
};

export default languagesPermissionToGraphql;
