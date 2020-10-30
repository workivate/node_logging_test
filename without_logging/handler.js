'use strict';

async function wait(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

module.exports.run = async event => {
  const iterations = process.env.iterations
  for (let i=0; i<iterations; i++) {
    // console.log(`Iteration: ${i}`)
    await wait(10)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Done'
      },
      null,
      2
    ),
  };
};
