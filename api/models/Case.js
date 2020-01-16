module.exports = {
  dontUseObjectIds: true,
  attributes: {
    id: { type: 'string', required: true, unique: true, columnName: '_id' },
    record: { type: 'string', required: true },
    doctor: { model: 'user' },
    time: { type: 'number' },
    condition: { model: 'condition' },
  }
};
