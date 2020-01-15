module.exports.policies = {
  '*': 'isLoggedIn',
  'case/create': 'isAdmin',
  'case/destroy': 'isAdmin',
  'condition/create': 'isAdmin',
  'condition/update': 'isAdmin',
  'condition/destroy': 'isAdmin',
  'user/*': 'isAdmin',
  'auth/*': true,
};
