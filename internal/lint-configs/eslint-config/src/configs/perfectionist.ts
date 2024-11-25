import type { Linter } from 'eslint';

import perfectionistPlugin from 'eslint-plugin-perfectionist';

export async function perfectionist(): Promise<Linter.Config[]> {
  return [
    perfectionistPlugin.configs['recommended-natural'],
    {
      rules: {
        'perfectionist/sort-exports': [
          'error',
          {
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-imports': [
          'error',
          {
            customGroups: {
              type: {
                repo: 'repo',
                vue: 'vue',
              },
              value: {
                repo: ['@repo*', '@repo/**/**', '@repo-core/**/**'],
                vue: ['vue', 'vue-*', '@vue*'],
              },
            },
            groups: [
              ['external-type', 'builtin-type', 'type'],
              ['parent-type', 'sibling-type', 'index-type'],
              ['internal-type'],
              'builtin',
              'vue',
              'repo',
              'external',
              'internal',
              ['parent', 'sibling', 'index'],
              'side-effect',
              'side-effect-style',
              'style',
              'object',
              'unknown',
            ],
            internalPattern: ['#*', '#*/**'],
            newlinesBetween: 'always',
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-named-exports': [
          'error',
          {
            order: 'asc',
            type: 'natural',
          },
        ],
        'perfectionist/sort-objects': [
          'error',
          {
            customGroups: {
              items: 'items',
              list: 'list',
              children: 'children',
            },
            groups: ['unknown', 'items', 'list', 'children'],
            ignorePattern: ['children'],
            order: 'asc',
            partitionByComment: 'Part:**',
            type: 'natural',
          },
        ],
        'perfectionist/sort-vue-attributes': [
          'error',
          {
            // Based on: https://vuejs.org/style-guide/rules-recommended.html#element-attribute-order
            customGroups: {
              CONDITIONALS: 'v-*(else-if|if|else|show|cloak)',
              CONTENT: 'v-*(html|text)',
              DEFINITION: '*(is|:is|v-is)',
              // OTHER_DIRECTIVES e.g. 'v-custom-directive'
              EVENTS: '*(v-on|@*)',
              GLOBAL: '*(:id|id)',
              LIST_RENDERING: 'v-for',
              RENDER_MODIFIERS: 'v-*(pre|once)',
              SLOT: '*(v-slot|slot)',
              TWO_WAY_BINDING: '*(v-model|v-model:*)',
              UNIQUE: '*(ref|key|:ref|:key)',
            },
            groups: [
              'DEFINITION',
              'LIST_RENDERING',
              'CONDITIONALS',
              'RENDER_MODIFIERS',
              'GLOBAL',
              'UNIQUE',
              'SLOT',
              'TWO_WAY_BINDING',
              'unknown',
              'EVENTS',
              'CONTENT',
            ],
            type: 'natural',
          },
        ],
      },
    },
  ];
}
