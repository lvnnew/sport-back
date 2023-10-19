import log from '../../log';
import {KeycloakAdminClient} from '@s3pweb/keycloak-admin-client-cjs';

export interface CreateOrUpdateUserParams {
  realm: string,
  username: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
}

const createOrUpdateUser = async (
  keycloak: KeycloakAdminClient,
  {
    realm,
    username,
    email,
    password,
    firstName,
    lastName,
  }: CreateOrUpdateUserParams,
) => {
  const foundAdminTestUsers = await keycloak.users.find({realm, username});

  const data = {
    username,
    enabled: true,
    email,
    firstName,
    lastName,
    emailVerified: true,
    credentials: [
      {
        type: 'password',
        value: password,
      },
    ],
    realmRoles: ['offline_access'],
    clientRoles: {
      account: ['manage-account'],
    },
  };

  if (foundAdminTestUsers.length) {
    log.info(`Updating ${username} for realm: ${realm}`);

    const foundAdminTestUser = foundAdminTestUsers[0];

    return keycloak.users.update(
      {
        id: foundAdminTestUser.id!,
        realm,
      },
      data,
    );
  } else {
    log.info(`Creating ${username} for realm: ${realm}`);

    return keycloak.users.create({
      realm,
      ...data,
    });
  }
};

export default createOrUpdateUser;
