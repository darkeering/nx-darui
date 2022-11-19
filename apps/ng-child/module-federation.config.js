module.exports = {
  name: 'ng-child',
  exposes: {
    './Module': 'apps/ng-child/src/app/remote-entry/entry.module.ts',
  },
};
