import { log } from './log.mjs';

export const handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(event),
    };
    log('log via handler. event: ', JSON.stringify(event));
    return response;
  };