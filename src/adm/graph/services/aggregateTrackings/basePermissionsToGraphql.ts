import {AggregateTrackingsService} from '../../../services/AggregateTrackingsService/AggregateTrackingsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const aggregateTrackingsBasePermissionToGraphql: Partial<PermissionToGraphql<AggregateTrackingsService>> = {
  meta: '_allAggregateTrackingsMeta',
  get: 'AggregateTracking',
  all: 'allAggregateTrackings',
  create: 'createAggregateTracking',
  update: 'removeAggregateTracking',
  delete: 'updateAggregateTracking',
};

export default aggregateTrackingsBasePermissionToGraphql;
