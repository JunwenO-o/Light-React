module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    _: true,
    $: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "eol-last": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": [0, { extensions: [".js", ".jsx"] }],
    "react/button-has-type": 0,
    "react/jsx-props-no-spreading": 0,
    "max-len": 0,
  },
};
