const passport = require('passport');

module.exports = {
  login: (req, res) => {
    passport.authenticate('local', (err, user, info) => {
      if (err || !user) {
        return res.badRequest({ message: info.message, user });
      }
      return res.ok(user);
    })(req, res);
  },

  logout: (req, res) => {
    req.logout();
    res.redirect('/');
  }
};
