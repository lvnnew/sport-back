import matchPeriodMarkupsBasePermissionToGraphql from './basePermissionsToGraphql';
import matchPeriodMarkupsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {MatchPeriodMarkupsService} from '../../../services/MatchPeriodMarkupsService/MatchPeriodMarkupsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchPeriodMarkupsPermissionToGraphql:
  Partial<PermissionToGraphql<MatchPeriodMarkupsService>> = {
    ...matchPeriodMarkupsBasePermissionToGraphql,
    ...matchPeriodMarkupsAdditionalPermissionToGraphql,
  };

export default matchPeriodMarkupsPermissionToGraphql;
