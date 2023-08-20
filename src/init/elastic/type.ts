import Entity from '../../types/Entity';
import {MappingProperty, PropertyName} from '@elastic/elasticsearch/lib/api/typesWithBodyKey';

export type ElasticJobs = Partial<Record<Entity, Record<PropertyName, MappingProperty>>>;
