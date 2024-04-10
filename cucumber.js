const config = {
  require: [
    'src/**/*.ts',
    'src/hooks/hooks.ts',
  ],
  requireModule: ['ts-node/register'],
  format: [
    'summary',
    'progress-bar'
  ],
  formatOptions: { snippetInterface: 'async-await' }
}

// eslint-disable-next-line no-undef
module.exports = {
  default: config
}
