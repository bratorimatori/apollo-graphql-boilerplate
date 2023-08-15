import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/schema/',
  generates: {
    'src/__generated__/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-resolvers',
        'typescript-document-nodes',
      ],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
  config: {
    useIndexSignature: true,
    // Providing our context's interface ensures our
    // context's type is set for all of our resolvers.

    // Note, this file path starts from the location of the
    // file where you generate types.
    // (i.e., `/src/__generated__/resolvers-types.ts` above)
    contextType: '../appContext#ContextValue',
  },
};

export default config;
