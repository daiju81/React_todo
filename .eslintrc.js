module.exports = {
  env: {
    browser: true, // document や console にエラーが出ないようにする
    es6: true, // es6から使える let や const にエラーがでないようにする
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
};
