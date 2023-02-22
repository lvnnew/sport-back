import {PermissionToGraphql} from '../../permissionsToGraphql';
import {SaveFileMethods} from '../../../services/SaveFiles/SaveFileMethods';

const saveFilesPermissionToGraphql: Partial<PermissionToGraphql<SaveFileMethods>> = {
  saveFile: 'saveFile',
  saveFiles: 'saveFiles',
};

export default saveFilesPermissionToGraphql;
