module.exports = {
  method: 'GET',
  path: '/name/{name}',
  handler: (request, reply) => {
    reply(`Hello, ${encodeURIComponent(request.params.name)}!`);
  }
}
