module.exports = {
  trailingComma: 'none',
  singleQuote: true,
  semi: false,
  jsxBracketSameLine: true,
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
  importOrder: [
    '^(react/(.*)$)|^(react)',
    '^(redux/(.*)$)|^(redux)',
    '^[./]',
    'react/*',
    '<THIRD_PARTY_MODULES>'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true
}