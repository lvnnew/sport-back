import {getConfig} from '../../config';
import {KeycloakAdminClient} from '@s3pweb/keycloak-admin-client-cjs';
import createOrUpdateUser, {CreateOrUpdateUserParams} from './createOrUpdateUser';

const getAdmKeycloak = async () => {
  const {
    oidcAdmUrl,
    keycloakAdmCliClient,
    keycloakAdmCliSecret,
    oidcAdmRealm,
  } = await getConfig();

  if (
    !oidcAdmUrl ||
    !keycloakAdmCliClient ||
    !keycloakAdmCliSecret
  ) {
    throw new Error('Credentials for keycloak not provided');
  }

  const client = new KeycloakAdminClient({
    baseUrl: oidcAdmUrl,
    realmName: oidcAdmRealm,
  });

  await client.auth({
    grantType: 'client_credentials',
    clientId: keycloakAdmCliClient,
    clientSecret: keycloakAdmCliSecret,
  });

  return {
    client,
    createOrUpdateUser:
      (params: Omit<CreateOrUpdateUserParams, 'realm'>) => createOrUpdateUser(client, {...params, realm: oidcAdmRealm!}),
  };
};

export type AdmKeycloak = Awaited<ReturnType<typeof getAdmKeycloak>>;

export default getAdmKeycloak;
