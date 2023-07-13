import {StatsService} from '../../../services/StatsService/StatsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const statsBasePermissionToGraphql:
  Partial<PermissionToGraphql<StatsService>> = {
    meta: '_allStatsMeta',
    get: 'Stat',
    all: 'allStats',
    create: 'createStat',
    update: 'updateStat',
    delete: 'removeStat',
  };

export default statsBasePermissionToGraphql;
