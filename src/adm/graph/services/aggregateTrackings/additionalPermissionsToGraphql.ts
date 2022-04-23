import aggregateTrackingsBasePermissionToGraphql from './basePermissionsToGraphql';
import aggregateTrackingsAdditionalPermissionToGraphql from './additionalPermissionsToGraphql';
import {AggregateTrackingsService} from '../../../services/AggregateTrackingsService/AggregateTrackingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const aggregateTrackingsPermissionToGraphql: Partial<PermissionToGraphql<AggregateTrackingsService>> = {
  ...aggregateTrackingsBasePermissionToGraphql,
  ...aggregateTrackingsAdditionalPermissionToGraphql,
};

export default aggregateTrackingsPermissionToGraphql;
