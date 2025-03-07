import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import tsParser from '@typescript-eslint/parser'

import path from 'path'

import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    {
        languageOptions: {
            parser: tsParser,
            parserOptions: { project: path.join(__dirname, 'tsconfig.json') },
            globals: globals.node
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            // "no-console": "error",
            quotes: ['error', 'single', { allowTemplateLiterals: true }],
            ...prettier.rules
        }
    }
]
