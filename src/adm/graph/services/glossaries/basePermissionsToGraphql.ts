import {GlossariesService} from '../../../services/GlossariesService/GlossariesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const glossariesBasePermissionToGraphql:
  Partial<PermissionToGraphql<GlossariesService>> = {
    meta: '_allGlossariesMeta',
    get: 'Glossary',
    all: 'allGlossaries',
    create: 'createGlossary',
    update: 'updateGlossary',
    delete: 'removeGlossary',
  };

export default glossariesBasePermissionToGraphql;
