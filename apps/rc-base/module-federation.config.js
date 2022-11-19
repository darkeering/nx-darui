// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'rc-base',
  remotes: ['rc-child'],
};

module.exports = moduleFederationConfig;
