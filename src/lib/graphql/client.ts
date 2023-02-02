import * as dotenv from 'dotenv';
dotenv.config();

import { GraphQLClient } from 'graphql-request';
import { getSdkWithHooks } from './generated/sdk';

const gqlClient = new GraphQLClient(process.env.PUBLIC_GRAPHQL_URL as string);

export const kitClient = getSdkWithHooks(gqlClient);
