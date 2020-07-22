import { ApolloServer } from 'apollo-server-micro';
import { schema } from 'Api/nexusSchema';
import { createContext } from 'Api/context';
import cors from 'micro-cors';
import { send } from 'micro';

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

export const config = {
  api: {
    bodyParser: false,
  },
};
const handler = apolloServer.createHandler({ path: '/api/graphql' });
export default cors()((req, res) => {
  if (req.method === 'OPTIONS') {
    return send(res, 200, 'ok!');
  }
  return handler(req, res);
});
