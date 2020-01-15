module.exports.routes = {
  'GET /login': 'AuthController.getUser',
  'POST /login': 'AuthController.login',
  'POST /logout': 'AuthController.logout',
};
