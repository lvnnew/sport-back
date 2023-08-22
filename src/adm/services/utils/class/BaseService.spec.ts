import {expect} from 'jest-without-globals';
import {createContext} from '../../context';
import {AdditionalPermissionsService} from '../../PermissionsService/AdditionalPermissionsService';
import {ServiceErrors} from './ServiceErrors';
import {MutationCreatePermissionArgs} from '../../../../generated/graphql';

describe('Checking allowedToChange restrictions for BaseService', () => {
  it('allowedToChange error throwing', async () => {
    const ctx = await createContext();

    const customNotesService = new AdditionalPermissionsService(ctx);

    const dataToCreate: MutationCreatePermissionArgs[] = [{
      id: 'somePermission',
    }];

    await customNotesService.create(dataToCreate[0]);

    customNotesService.allowedToChange = () => false;

    const existInDb = await customNotesService.findOneRequired();

    const errorExample = new Error(ServiceErrors.DoNotAllowToChange);

    // create method
    await expect(customNotesService.create(dataToCreate[0])).rejects.toEqual(errorExample);

    // create many method
    await expect(customNotesService.createMany(dataToCreate)).rejects.toEqual(errorExample);

    // post method
    // await expect(customNotesService.post(existInDb)).rejects.toEqual(errorExample);

    // update method
    await expect(customNotesService.update(existInDb)).rejects.toEqual(errorExample);

    // delete method
    await expect(customNotesService.delete(existInDb)).rejects.toEqual(errorExample);
  });
});
