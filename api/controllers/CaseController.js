module.exports = {
  find: (req, res) => {
    Case.find({ where: { doctor: null }, limit: 1 })
      .then(cases => {
        if (cases.length === 0) {
          res.notFound();
        } else {
          res.ok(cases[0]);
        }
      }).catch(err => {
        res.serverError(err);
      });
  },
};
