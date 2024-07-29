import {MatchPeriodMarkupsService} from '../../../services/MatchPeriodMarkupsService/MatchPeriodMarkupsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const matchPeriodMarkupsBasePermissionToGraphql:
  Partial<PermissionToGraphql<MatchPeriodMarkupsService>> = {
    meta: '_allMatchPeriodMarkupsMeta',
    get: 'MatchPeriodMarkup',
    all: 'allMatchPeriodMarkups',
    create: 'createMatchPeriodMarkup',
    update: 'updateMatchPeriodMarkup',
    delete: 'removeMatchPeriodMarkup',
  };

export default matchPeriodMarkupsBasePermissionToGraphql;
