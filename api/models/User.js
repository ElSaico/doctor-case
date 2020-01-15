const bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true, isEmail: true },
    password: { type: 'string', required: true },
    admin: { type: 'boolean', defaultsTo: false }
  },
  // this cannot be an arrow function because JavaScript scope binding is Pure Fun(tm)
  // https://github.com/balderdashy/sails/issues/4535
  customToJSON () { return _.omit(this, ['password']); },
  beforeCreate: (user, cb) => {
    bcrypt.hash(user.password, 10, (err, hash) => {
      if (err) {
        return cb(err);
      }
      user.password = hash;
      return cb();
    });
  }
};
