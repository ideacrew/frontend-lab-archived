module.exports = {
  name: 'labs',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/labs',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
