/* eslint-disable no-irregular-whitespace */
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import {getConfig} from '../config';
import log from '../log';

// yarn ts-node src/cli/getSecrets.ts

const app = async () => {
  const privateToken = '';

  if (!privateToken) {
    log.warn(`
                 ／＞　   フ
                 |  　_　_|
                ／\` ミ＿xノ
               /　　　　 |
              /  ヽ　　 ﾉ
              │　 |　|　|
          ／￣|　 |　|　|
          (￣ヽ＿_ヽ_)__)
          ＼二) - Файл конфигурации не будет получен, privateToken не установлен или не хватает прав доступа
    `);
    return;
  }

  const variablePrefix = 'DEV_';

  const {appName} = await getConfig();
  const outputFilename = appName === 'rlw' ? 'sharding.json' : 'stage.json';
  const configFolderPath = path.join(__dirname, '../../', 'config');
  const stageConfigFilePath = path.join(configFolderPath, outputFilename);
  const defaultConfigFilePath = path.join(__dirname, '../../', 'config', 'default.json');

  if (!fs.existsSync(configFolderPath)) {
    fs.mkdirSync(configFolderPath);
  }

  let groupName = '';
  try {
    const response = await axios.get(
      `https://gitlab.service.making.ventures/api/v4/projects?search=${appName}`,
      {headers: {'PRIVATE-TOKEN': privateToken}},
    );
    groupName = response.data[0].namespace.name;
  } catch (error) {
    log.error('Ошибка при получении названия группы:', error);
  }

  async function fetchVariables() {
    let page = 1;
    const variables: any = [];

    try {
      let responseVariables = '';
      do {
        const response = await axios.get(
          `https://gitlab.service.making.ventures/api/v4/groups/${groupName}/variables?page=${page}`,
          {headers: {'PRIVATE-TOKEN': privateToken}},
        );
        responseVariables = response.data;
        variables.push(...responseVariables);

        page++;
      } while (responseVariables.length >= 20);

      return variables;
    } catch (error) {
      log.error('Ошибка при получении переменных:', error);
      return variables;
    }
  }

  fetchVariables().then((variables) => {
    const secretVariables = variables.filter(
      (variable: any) =>
        typeof variable === 'object' && variable.key.startsWith(variablePrefix),
    );

    if (!secretVariables) {
      return;
    }

    const envObj = secretVariables.reduce((acc: any, secretVariable: any) => {
      const key = secretVariable.key
        .replaceAll(variablePrefix, '')
        .replaceAll('_', '')
        .replaceAll('.', '')
        .toLowerCase();

      acc[key] = secretVariable.value;
      return acc;
    }, {});

    try {
      const defaultVariables = fs.readFileSync(defaultConfigFilePath).toString();
      const defaultVariablesObj = JSON.parse(defaultVariables);
      const tempVariables: any = [];
      Object.entries(defaultVariablesObj).forEach(([key, value]: [any, any]) => {
        const searchKey = key.replaceAll('.', '').toLowerCase();
        tempVariables.push({
          searchKey,
          key,
          value,
        });
      });
      tempVariables.forEach((variable: any) => {
        variable.value = envObj[variable.searchKey] ?? variable.value;
      });

      const finalVariables = tempVariables.reduce((acc: any, variable: any) => {
        acc[variable.key] = variable.value;
        return acc;
      }, {});

      fs.promises.writeFile(stageConfigFilePath, JSON.stringify(finalVariables, null, 2))
        .then(() => {
          log.info('stage.json успешно сформирован');
        });
    } catch (error) {
      log.error('Ошибка при обработке:', error);
      return variables;
    }
  });
};

app();
