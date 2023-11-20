module.exports = {
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  bracketSpacing: false,
  jsxBracketSameLine: true,
  trailingComma: 'all',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  htmlWhitespaceSensitivity: 'strict',
  tailwindConfig: './tailwind.config.js',
};

// [Prettier Plugin] Remove duplicate class names and spaces on sort
// https://github.com/tailwindlabs/tailwindcss/discussions/7560
