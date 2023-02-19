import {getConfig} from '../../../config';
import log from '../../../log';
import uploadXlsxOnObjectArrayToS3 from '../../../utils/uploadXlsxOnObjectArrayToS3';
import {BaseServices} from '../BaseServices';
import {Context} from '../types';

export interface EntityExporterService {
  downloadEntityRecords: (entityName: Omit<keyof BaseServices, 'HelpService'>, filter: Record<string, any>) => Promise<void>;
}

export const getEntityExporterService = (ctx: Context): EntityExporterService => {
  const downloadEntityRecords = async (entityName: Omit<keyof BaseServices, 'HelpService'>, filter: Record<string, any>) => {
    const {s3BucketEmailFiles} = await getConfig();
    if (!s3BucketEmailFiles) {
      throw new Error('s3BucketEmailFiles not provided');
    }

    const manager = await ctx.service('profile').getManager();

    if (!manager) {
      throw new Error('No manager found');
    }

    log.info('manager email');
    log.info(manager.email);

    const data = await ctx.service(entityName as any).all({
      filter,
      page: 0,
      perPage: 10_000,
    } as any);

    log.info('data');
    log.info(data.length);

    if (!data || data.length === 0) {
      return;
    }

    const fileData = await uploadXlsxOnObjectArrayToS3<any>(data, s3BucketEmailFiles, entityName as string);

    await ctx.service('sendingEmails').sendReportFileAsLink({reportName: entityName, link: fileData.url}, manager.email, fileData);
  };

  return {
    downloadEntityRecords,
  };
};
