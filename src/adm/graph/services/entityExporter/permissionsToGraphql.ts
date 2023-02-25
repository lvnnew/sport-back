import {PermissionToGraphql} from '../../permissionsToGraphql';
import EntityExporterService from '../../../services/EntityExporter/EntityExporterService';

const entityExporterPermissionToGraphql: Partial<PermissionToGraphql<EntityExporterService>> = {
  downloadEntityRecords: 'downloadEntityRecords',
};

export default entityExporterPermissionToGraphql;

