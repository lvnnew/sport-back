import {Context} from '../../adm/services/types';
import ManagerLoginType from '../../types/ManagerLoginType';

// DO NOT EDIT! THIS IS GENERATED FILE

const initManagerLoginTypes = async (ctx: Context) => {
  await ctx.service('managerLoginTypes').createMany([
    {
      id: ManagerLoginType.Internal,
      title: 'Internal',
    },
    {
      id: ManagerLoginType.Oidc,
      title: 'Open Id Connect',
    },
  ]);
};

export default initManagerLoginTypes;
