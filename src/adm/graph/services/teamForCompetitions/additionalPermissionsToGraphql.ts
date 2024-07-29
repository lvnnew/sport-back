import teamForCompetitionsBasePermissionToGraphql from './basePermissionsToGraphql';
import teamForCompetitionsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {TeamForCompetitionsService} from '../../../services/TeamForCompetitionsService/TeamForCompetitionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const teamForCompetitionsPermissionToGraphql:
  Partial<PermissionToGraphql<TeamForCompetitionsService>> = {
    ...teamForCompetitionsBasePermissionToGraphql,
    ...teamForCompetitionsAdditionalPermissionToGraphql,
  };

export default teamForCompetitionsPermissionToGraphql;
