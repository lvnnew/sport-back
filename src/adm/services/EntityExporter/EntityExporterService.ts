import * as R from 'ramda';
import {getConfig} from '../../../config';
import log from '../../../log';
import uploadXlsxOnObjectArrayToS3 from '../../../utils/uploadXlsxOnObjectArrayToS3';
import {BaseServices} from '../BaseServices';
import {Context} from '../types';

class EntityExporterService {
  constructor(protected ctx: Context) {}

  downloadEntityRecords = async (entityName: Omit<keyof BaseServices, 'HelpService'>, filter: Record<string, any>): Promise<void> => {
    const {s3BucketEmailFiles} = await getConfig();
    if (!s3BucketEmailFiles) {
      throw new Error('s3BucketEmailFiles not provided');
    }

    const manager = await this.ctx.service('profile').getManager();

    if (!manager) {
      throw new Error('No manager found');
    }

    log.info('manager email');
    log.info(manager.email);

    const data: Record<string, any>[] = await this.ctx.service(entityName as any).all({

      filter,
      page: 0,
      perPage: 10_000,
    } as any);

    log.info('data');
    log.info(data.length);

    if (!data || data.length === 0) {
      return;
    }

    const handlesData = data
      .map((el) => R.omit(['search'], el));

    await uploadXlsxOnObjectArrayToS3<any>(handlesData, s3BucketEmailFiles, entityName as string);
  };
}

export default EntityExporterService;
