import path from 'path';
import {createS3Putter} from '../../clients/s3';
import {getConfig} from '../../config';
import log from '../../log';

// yarn ts-node src/init/reports/initReportSrc.ts
// runlify start env=stage yarn ts-node src/init/reports/initReportSrc.ts
// runlify start env=test yarn ts-node src/init/reports/initReportSrc.ts

const initReportSrc = async () => {
  log.info('Upload report srcs to S3');

  const s3Folder = 'reports/src/';
  const filesToUpload = [
    'defaultTeamLogo.jpg',
    'linesReport.svg',
    'meshMain.svg',
    'Plateia.ttf',
    'serviceLogo.jpg',
    'Spaceranger-rus.otf',
  ];

  const {s3BucketTmpFilesToDownload} = await getConfig();
  if (!s3BucketTmpFilesToDownload) {
    throw new Error('s3BucketTmpFilesToDownload not provided');
  }

  const filePutter = createS3Putter(s3BucketTmpFilesToDownload);

  for (const fileName of filesToUpload) {
    log.info(`Upload: ${fileName}`);
    const filePath = path.join(path.resolve(__dirname), 'src', fileName);
    await filePutter(filePath, `${s3Folder}${fileName}`, 'public-read');
  }
};

initReportSrc();
