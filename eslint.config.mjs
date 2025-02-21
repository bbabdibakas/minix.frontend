import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
    {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
    {
        languageOptions: {
            globals: globals.browser,
            parser: tseslint.parser,
            parserOptions: {
                ecmaFeatures: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    {
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: 'detect',
            }
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-console': 'warn',
            'quotes': ['error', 'single'],
        },
    }
];