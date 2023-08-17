/** @type {import("prettier").Config} */
const config = {
  $schema: 'https://json.schemastore.org/prettierrc',
  tabWidth: 2,
  printWidth: 80,
  semi: false,
  useTabs: false,
  singleQuote: true,
  bracketSpacing: true,
  bracketSameLine: false,
  singleAttributePerLine: true,
  arrowParens: 'always',
  trailingComma: 'none',
  quoteProps: 'as-needed',
  endOfLine: 'lf',
  overrides: [
    {
      files: '.*rc',
      options: {
        parser: 'json'
      }
    }
  ]
}

module.exports = config
