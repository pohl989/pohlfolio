module.exports = {
  'root': true,
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-unused-vars': ['warn',
    ],
    'semi': ['error', 'never'],
    'require-jsdoc': ['error', {
      'require': {
        'FunctionDeclaration': false,
        'MethodDefinition': false,
        'ClassDeclaration': false,
        'ArrowFunctionExpression': false,
        'FunctionExpression': false,
      },
    }],
    'max-len': ['warn', {'code': 140}],
  },
  'settings': {
    'react': {
      'createClass': 'createReactClass',
      'pragma': 'React',
      'fragment': 'Fragment',
      'version': 'detect',
      'flowVersion': '0.53',
    },
  },
}
