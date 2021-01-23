import {
  pascalCase,
  camelCase,
  sentenceCase,
  capitalCase,
} from 'change-case';
import pluralize from 'pluralize';

export const pascalSingular = (name: string): string => pascalCase(pluralize(name, 1));
export const pascalPlural = (name: string): string => pascalCase(pluralize(name, 2));
export const camelSingular = (name: string): string => camelCase(pluralize(name, 1));
export const camelPlural = (name: string): string => camelCase(pluralize(name, 2));

export const pascal = (name: string): string => pascalCase(name);
export const camel = (name: string): string => camelCase(name);
export const sentence = (name: string): string => sentenceCase(name);
export const capital = (name: string): string => capitalCase(name);

