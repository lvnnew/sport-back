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
};

const system = new SystemMetaBuilder('mtbase', opts);

system.addConfigVar('smtp.host', '', 'Хост почтового сервера');
system.addConfigVar('smtp.port', '', 'Порт почтового сервера');
system.addConfigVar('smtp.user', '', 'Имя пользователя для авторизации на почтовом сервере');
system.addConfigVar('smtp.pass', '', 'Пароль пользователя для авторизации на почтовом сервере');
system.addConfigVar('smtp.from', '', 'Почтовый адрес, от имени которого следует отправлять письма');

addCommonEntities(system);

// stats
const stats = system.addCatalog('stats', 'Stats', opts);
stats.setNeedFor('Статистика');
stats.getKey().setType('string');
stats.addField('updated').setType('datetime');
stats.addField('helloCount').setType('int');

const tags = system.addCatalog('tags', 'Tags', opts);
tags.addField('comment').setType('string');

const meta = system.build();
const genFilder = fs.cwd('src').cwd('meta');
fs.write(genFilder.cwd('metadata.json').cwd(), stringify(meta, null, 1));
fs.write(genFilder.cwd('options.json').cwd(), stringify(opts, null, 1));
