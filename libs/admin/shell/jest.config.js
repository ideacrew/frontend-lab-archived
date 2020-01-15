module.exports = {
  name: 'admin-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/admin/shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
