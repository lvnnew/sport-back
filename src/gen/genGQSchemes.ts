/* eslint-disable sort-keys-fix/sort-keys-fix */
import {codegen} from '@graphql-codegen/core';
import {Types} from '@graphql-codegen/plugin-helpers';
import * as typescriptPlugin from '@graphql-codegen/typescript';
import * as typescriptResolversPlugin from '@graphql-codegen/typescript-resolvers';
import * as introspectionPlugin from '@graphql-codegen/introspection';
import path from 'path';
import {
  printSchema,
  parse,
  GraphQLSchema,
} from 'graphql';
import fs from 'fs-extra';
import {log} from '../log';

// ts-node src/gen/genGQSchemes.ts

interface Gen {
  filename: string;
  options: Omit<Types.GenerateOptions, 'filename'>;
}

export const genGQSchemes = async () => {
  const gens: Gen[] = [];

  const schema = (await import('../graph/schema')).default as GraphQLSchema;

  // const schema = (await import('../graph/schema')).default as GraphQLSchema;
  const parsed = parse(printSchema(schema));

  log.info(Object.keys(schema));
  log.info(Object.keys(schema?.toConfig()));

  gens.push({
    filename: '../generated/graphql.ts',
    options: {
      // used by a plugin internally, although the 'typescript' plugin currently
      // returns the string output, rather than writing to a file
      pluginMap: {
        typescript: typescriptPlugin,
        typescriptResolvers: typescriptResolversPlugin,
      },
      plugins: [ // Each plugin should be an object
        {
          typescript: {}, // Here you can pass configuration to the plugin
        },
        {
          typescriptResolvers: {}, // Here you can pass configuration to the plugin
        },
      ] as Types.ConfiguredPlugin[],
      schema: parsed,
      config: [],
      documents: [],
    },
  });

  gens.push({
    filename: '../../graphql.schema.json',
    options: {
      // used by a plugin internally, although the 'typescript' plugin currently
      // returns the string output, rather than writing to a file
      pluginMap: {
        introspection: introspectionPlugin,
      },
      plugins: [ // Each plugin should be an object
        {
          introspection: {}, // Here you can pass configuration to the plugin
        },
      ] as Types.ConfiguredPlugin[],
      schema: parsed,
      config: [],
      documents: [],
    },
  });

  for (const {filename, options} of gens) {
    const output = await codegen({
      ...options,
      filename,
    });
    await fs.writeFile(path.join(__dirname, filename), output);
  }

  await fs.writeFile('/home/name/prj/crawler/schema.graphql', printSchema(schema));

  // await fs.writeFile('/prjs/crawler/schema.graphql', printSchema(schema));
};

genGQSchemes();
