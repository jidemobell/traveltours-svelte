// import {CodegenConfig} from '@graphql-codegen/cli'

const config = {
  schema: './schema.graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/lib/graphql/generated.ts': {
      plugins: ['typescript', 'typescript-operations', 'graphql-codegen-svelte-apollo'],
      config: {
        clientPath: '../common/helpers/apollo-client',
      },
    },
  },
}

export default config