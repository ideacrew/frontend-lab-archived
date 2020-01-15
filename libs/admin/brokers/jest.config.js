module.exports = {
  name: 'admin-brokers',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/brokers',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
