import {SystemMetaBuilder} from 'runlify';

const addWscEntities = (system: SystemMetaBuilder) => {
  // wscUsers
  const wscUsers = system.addCatalog('wscUsers');
  wscUsers.setTitle({plural: 'WSC Users', singular: 'WSC User'});
  wscUsers.addField('login', 'Login', {isTitleField: true})
    .setType('string')
    .setRequired();
  wscUsers.addField('passwordHash', 'Password hash')
    .setType('string')
    .setRequired();
  wscUsers.addField('accessToken', 'Access token')
    .setType('string')
    .setNotUpdatableByUser();
  wscUsers.addUniqueConstraint(['login']);
  wscUsers.addUniqueConstraint(['accessToken']);

  // wscContacts
  const wscContacts = system.addCatalog('wscContacts');
  wscContacts.setTitle({plural: 'WSC Contacts', singular: 'WSC Contact'});
  wscContacts.addField('name', 'Name', {isTitleField: true})
    .setType('string')
    .setRequired();
  wscContacts.addField('phoneNumber', 'Phone number')
    .setType('string')
    .setRequired();
  wscContacts.addLinkField('wscUsers', 'wscUserId', 'User')
    .setRequired();
  wscContacts.addUniqueConstraint(['name', 'phoneNumber', 'wscUserId']);

  // wscMessages
  const wscMessages = system.addCatalog('wscMessages');
  wscMessages.setTitle({plural: 'WSC Messages', singular: 'WSC Message'});
  wscMessages.addField('externalId', 'External id')
    .setType('string')
    .setRequired();
  wscMessages.addField('dateTimeRaw', 'Datetime raw')
    .setType('string')
    .setRequired();
  wscMessages.addField('sender', 'Sender')
    .setType('string')
    .setRequired();
  wscMessages.addField('content', 'Content')
    .setType('string')
    .setRequired();
  wscMessages.addLinkField('wscUsers', 'wscUserId', 'User')
    .setRequired();
  wscMessages.addLinkField('wscContacts', 'wscContactId', 'Contact')
    .setRequired();
  wscMessages.addUniqueConstraint(['externalId']);
};

export default addWscEntities;
