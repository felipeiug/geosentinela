module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],

        camelcase: [
            'error',
            {
                properties: 'always',
            },
        ],

        "max-len": ["error", { code: 280 }],

        // '@typescript-eslint/naming-convention': [
        //     'error',
        //     {
        //         selector: 'function',
        //         format: ['camelCase'],
        //     },
        //     {
        //         selector: 'variableLike',
        //         format: ['camelCase'],
        //     },
        // ],

        // Ponto e vírgula no fim da linha
        semi: ['error', 'always'],
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
            },
        ],

        // Integrando Prettier com ESLint
        // "prettier/prettier": [
        //     "error",
        //     {
        //         singleQuote: false,
        //         semi: true,
        //         useTabs: false,
        //         tabWidth: 4,
        //         endOfLine: "auto",
        //         quoteProps: "consistent",
        //         functionParenthesesSpacing: "multiline",
        //     },
        // ],
    },
};