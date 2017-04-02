module.exports = {
  method: 'GET',
  path: '/user/{name}',
  handler: (request, reply) => {
    reply(`Hello ${encodeURIComponent(request.params.name)}!`);
  }
};
