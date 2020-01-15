module.exports.models = {
  migrate: 'alter',
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'string', columnName: '_id', },
  },
  dataEncryptionKeys: {
    default: 'Zic6xyccCglmO54xo3gcasB5h8NnL159ESk/D+8x0WU='
  },
};
