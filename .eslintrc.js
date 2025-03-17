module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-magic-numbers': ['warn', { ignoreArrayIndexes: true, ignore: [-3, -2, -1, 0, 1, 2, 3, 24, 60] }],
    'no-alert': 'error',
    'no-delete-var': 'error',
    'no-const-assign': 'error',
    'no-unreachable': 'error',
    'max-params': ['error', { max: 4 }],
    'react/function-component-definition': [
        2,
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["../*", "./*"],
      },
    ],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: { order: "asc", caseInsensitive: true },
        "newlines-between": "always",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
