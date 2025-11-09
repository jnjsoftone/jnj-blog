export const resolvers = {
  Query: {
    hello: () => 'Hello from blog GraphQL server!',
    version: () => '1.0.0',
  },
  Mutation: {
    ping: () => 'pong',
  },
};