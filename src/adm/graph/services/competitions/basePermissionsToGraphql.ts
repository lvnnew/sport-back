import {CompetitionsService} from '../../../services/CompetitionsService/CompetitionsService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const competitionsBasePermissionToGraphql:
  Partial<PermissionToGraphql<CompetitionsService>> = {
    meta: '_allCompetitionsMeta',
    get: 'Competition',
    all: 'allCompetitions',
    create: 'createCompetition',
    update: 'updateCompetition',
    delete: 'removeCompetition',
  };

export default competitionsBasePermissionToGraphql;
