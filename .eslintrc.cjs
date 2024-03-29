module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        indent: ['error', 4],
        quotes: ['error', 'single'],
        'no-undef': 'off', 
        'max-len': ['error', { 'code': 90 }]
    },

};
