const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.serializeUser((user, cb) => cb(null, user.id));

passport.deserializeUser((id, cb) =>
  User.findOne({id}, (err, users) => cb(err, users))
);

passport.use(new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  (email, password, cb) =>
    User.findOne({email: email}, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false, { message: 'Invalid user or password' });
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (err) {
          return cb(err);
        }
        if (!res) {
          return cb(null, false, { message: 'Invalid user or password' });
        }
        return cb(null, user);
      });
    })
));

module.exports.http = {
  middleware: {
    passportInit: passport.initialize(),
    passportSession: passport.session(),
    order: [
      'cookieParser',
      'session',
      'passportInit',
      'passportSession',
      'bodyParser',
      'compress',
      'poweredBy',
      'router',
      'www',
      'favicon',
    ],
  },
};
