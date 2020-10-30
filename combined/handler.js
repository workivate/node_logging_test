'use strict';
const log = require('@lifeworks/logging');

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

module.exports.run = async event => {
  let { runs, delay, write } = event.pathParameters;

  runs = Number(runs);
  delay = Number(delay);
  write = Boolean(write);

  log.info(event.pathParameters);
  for (let i=0; i<runs; i++) {
    write?log.info(`Iteration: ${i}`, event):null
    await wait(delay)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Done'}),
  };
};
