module.exports = {
  rules: {
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "single"],
    semi: ["error", "never"],
    requireatomicupdates: ["off"]
  },
  plugins: ["react"],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  },
  extends: [
      "eslint:recommended",
      "plugin:react/recommended"
  ]
}
