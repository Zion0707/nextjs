module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:react/recommended', 'standard'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-var': 2,
        'comma-dangle': 0,
        'space-before-function-paren': 0,
        'react/react-in-jsx-scope': 0,
        'react/prop-types': 0,
        semi: 0,
        indent: 0,
    },
};
