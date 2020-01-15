const passport = require('passport');

module.exports = {
  getUser: (req, res) => {
    console.log(req);
    if (req.isAuthenticated()) {
      return res.ok(req.user);
    }
    return res.forbidden();
  },

  login: (req, res) => {
    // THIS SPECIFIC CALLBACK cannot be an arrow function, because scoping shenanigans
    passport.authenticate('local', function (err, user, info) {
      if (err || !user) {
        return res.badRequest({ message: info.message, user });
      }
      req.login(user, err => {
        if (err) {
          res.send(err);
        }
        return res.ok({ message: info.message, user });
      });
    })(req, res);
  },

  logout: (req, res) => {
    req.logout();
    res.sendStatus(204);
  }
};
