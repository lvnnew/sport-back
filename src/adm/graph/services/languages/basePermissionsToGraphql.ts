/* eslint-disable sort-keys-fix/sort-keys-fix */
import {LanguagesService} from '../../../services/LanguagesService/LanguagesService';
import {PermissionToGraphql} from '../../permissionsToGraphql';

// DO NOT EDIT! THIS IS GENERATED FILE

const languagesBasePermissionToGraphql: Partial<PermissionToGraphql<LanguagesService>> = {
  meta: '_allLanguagesMeta',
  get: 'Language',
  all: 'allLanguages',
  create: 'createLanguage',
  update: 'removeLanguage',
  delete: 'updateLanguage',
};

export default languagesBasePermissionToGraphql;
