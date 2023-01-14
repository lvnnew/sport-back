import {LanguagesService} from '../../../services/LanguagesService/LanguagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const languagesBasePermissionToGraphql: Partial<PermissionToGraphql<LanguagesService>> = {
  meta: '_allLanguagesMeta',
  get: 'Language',
  all: 'allLanguages',
  create: 'createLanguage',
  update: 'updateLanguage',
  delete: 'removeLanguage',
};

export default languagesBasePermissionToGraphql;
