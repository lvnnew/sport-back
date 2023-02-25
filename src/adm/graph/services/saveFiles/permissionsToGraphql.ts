import {PermissionToGraphql} from '../../permissionsToGraphql';
import SaveFilesService from '../../../services/SaveFilesService/SaveFilesService';

const saveFilesPermissionToGraphql: Partial<PermissionToGraphql<SaveFilesService>> = {
  saveFile: 'saveFile',
  saveFiles: 'saveFiles',
};

export default saveFilesPermissionToGraphql;
