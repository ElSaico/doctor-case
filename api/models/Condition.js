module.exports = {
  attributes: {
    code: { type: 'string', required: true, unique: true },
    description: { type: 'string', required: true },
    cases: { collection: 'case', via: 'condition' },
  }
};
