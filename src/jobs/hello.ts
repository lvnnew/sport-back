import log from '../log';

const hello = async (payload: {name: string}) => {
  const {name} = payload;
  log.info(`name: ${name}`);
};

export default hello;
