import fs from 'fs-jetpack';
import {
  BootstrapEntityOptions,
  defaultBootstrapEntityOptions,
  SystemMetaBuilder,
  addCommonEntities,
} from 'runlify';
import path from 'path';
import stringify from 'safe-stable-stringify';

// yarn regen

const dir = fs.cwd('..').cwd();

const opts: BootstrapEntityOptions = {
  ...defaultBootstrapEntityOptions,
  genUiCountWidget: true,
  genUiDashboard: true,
  genUiElements: true,
  genUiEntityMapping: true,
  genUiFunctions: true,
  genUiListWidget: true,
  genUiMenu: true,
  genUiResources: true,
  genUiResourcesPage: true,
  genUiRoutes: true,
  skipWarningThisIsGenerated: false,

  detachedBackProject: path.join(dir, 'mtbase-back'),
  detachedUiProject: path.join(dir, 'mtbase-ui'),
  projectsGroup: 'mtbase',
  dbName: 'mtbase_stage',
  projectName: 'Meta Template Base',
  projectPrefix: 'mtbase',
};

const system = new SystemMetaBuilder('mtbase', opts);

system.addConfigVar('smtp.host', 'string', false, '', 'Хост почтового сервера');
system.addConfigVar('smtp.port', 'int', false, 465, 'Порт почтового сервера');
system.addConfigVar('smtp.user', 'string', false, '', 'Имя пользователя для авторизации на почтовом сервере');
system.addConfigVar('smtp.pass', 'string', false, '', 'Пароль пользователя для авторизации на почтовом сервере');
system.addConfigVar('smtp.from', 'string', false, '', 'Почтовый адрес, от имени которого следует отправлять письма');
system.addConfigVar('smtp.secure', 'bool', false, true, 'Использовать ли tls');
system.addConfigVar('smtp.rejectUnauthorized', 'bool', false, false, 'Реджектить ли невалидные сертификаты');

addCommonEntities(system);

// stats
const stats = system.addCatalog('stats', {plural: 'Stats', singular: 'Stats'}, opts);
stats.setNeedFor('Статистика');
stats.getKey().setType('string');
stats.addField('updated').setType('datetime');
stats.addField('helloCount').setType('int');

const tags = system.addCatalog('tags', {plural: 'Tags', singular: 'Tag'}, opts);
tags.addField('comment').setType('string');

const meta = system.build();
const genFilder = fs.cwd('src').cwd('meta');
fs.write(genFilder.cwd('metadata.json').cwd(), stringify(meta, null, 1));
fs.write(genFilder.cwd('options.json').cwd(), stringify(opts, null, 1));
