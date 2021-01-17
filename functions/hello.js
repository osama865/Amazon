exports.handler = function (event, context, callback) {
  const { name } = JSON.parse(event.body);
  callback(null, {
    statusCode: 200,
    body: "I must be a string and hello mr oooooooooooooooooooooo: " + name,
  });
};
