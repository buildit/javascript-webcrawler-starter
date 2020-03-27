module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      { targets: { node: 'current' } },
    ],
  ]

  const plugins = [
    '@babel/plugin-proposal-class-properties',
  ]

  // We need to define the test env with the same presets stanza, otherwise
  // jest will barf if it encounters any async/await code within tests
  const env = { test: { presets, plugins } }

  return { presets, plugins, env }
}
