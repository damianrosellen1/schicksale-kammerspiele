import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  rules: {
    'vue/max-attributes-per-line': 1,
    'node/prefer-global/process': 'off',
  },
  formatters: {
    css: true,
    postcss: true,
  },
})
