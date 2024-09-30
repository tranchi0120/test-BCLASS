import js from '@eslint/js'
import globals from 'globals'

export default [
    { ignores: ['dist'] },
    {
        files: ['**/*.{js,jsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: { jsx: true },
                sourceType: 'module',
            },
        },
        settings: {
            react: { version: '18.3' },
        },
        extends: [
            'eslint:recommended',
            'plugin:react/recommended',
            'plugin:react-hooks/recommended',
        ],
        plugins: ['react-refresh'],
        rules: {
            'react/jsx-no-target-blank': 'off',
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],
            'semi': ['error', 'never'],
        },
    },
]
