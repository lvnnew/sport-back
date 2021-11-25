import log from '../../../log';
import {EmailOptions, whitelistedEmail} from '../../emaiSender';
import {getQueue} from '../getQueue';
import {Job} from './Job';
import {MessageTemplate} from '../../../types/enums';

export type SendEmailLocals = Record<string, any>;

export interface AddSendEmailJobArgs extends EmailOptions {
  template: MessageTemplate;
  locals?: SendEmailLocals;
}

// export const g = {
//   template: 'changeLevel',
//   locals: {
//     id: '9000059390',
//     search: '9000059390 aliev tofik individual old tofik aliev (ca2761585) male 75488 1500 76988 0',
//     lastname: 'ALIEV',
//     firstname: 'TOFIK',
//     memberTypeId: 'individual',
//     enrolDate: '2012-03-01T00:00:00.000Z',
//     registrationSourceId: 'old',
//     initialsId: null,
//     title: 'TOFIK ALIEV (CA2761585)',
//     genderId: 'male',
//     contactPreferenceId: null,
//     birthDay: '1965-11-17T00:00:00.000Z',
//     newMember: false,
//     levelId: 'premium',
//     totalBonusMilesReceived: 1500,
//     totalMilesReceived: 76988,
//     totalQualificationMilesReceived: 75488,
//     availableMiles: 0,
//     milesForNextLevel: 179512,
//     milesPercentForNextLevel: 71.8048,
//     statusId: 'expired',
//     usedMiles: -76988,
//     nextLevelId: 'silver',
//     lastFlightDate: '2016-07-22T00:00:00.000Z',
//     nationalityId: null,
//     languageId: 'russian',
//     activitiesParsed: false,
//     additionalSearch: null,
//     oldTotalBaseMiles: 75488,
//     oldTotalBonusMiles: 1500,
//     oldTotalExpiredMiles: 76988,
//     oldTotalUsedMiles: 0,
//     balancesDiffers: null,
//     newLevel: {
//       id: 'premium',
//       search: 'premium premium 5000',
//       title: 'Premium',
//       miles: 5000,
//     },
//   },
//   message: {
//     to: 'habib200465@mail.ru',
//   },
// };

export const addSendEmailJob = async (args: AddSendEmailJobArgs) => {
  log.info('addSendEmailJob');
  log.info('args');

  // log.info(args);
  const queue = await getQueue();

  const to = whitelistedEmail(args.message?.to ? args.message.to.toString() : '');

  if (!to) {
    throw new Error(`Email you wish to send to should be provided. Computed email: "${to}", original: "${args.message?.to}"`);
  }

  await queue.addJob(
    Job.SendEmail,
    {
      template: args.template,
      lang: args.lang,
      locals: args.locals,
      files: args.files,
      message: {
        ...args.message,
        to,
      },
    },
  );
};
