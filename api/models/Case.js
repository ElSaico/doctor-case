module.exports = {
  dontUseObjectIds: true,
  attributes: {
    id: { type: 'string', required: true, unique: true, columnName: '_id' },
    record: { type: 'string', required: true },
    doctor: { model: 'user' },
    time: { type: 'number' },
    conditions: { collection: 'condition', via: 'cases' }
  }
};
