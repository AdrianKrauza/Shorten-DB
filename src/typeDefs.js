import { gql } from 'apollo-server-express';


export const typeDefs = gql`
	type Query {
		urls: [Url!]
		url(shortened: String!): Url
	}

	type Url {
		url: String!
		shortened: String!
	}

	type Mutation {
	  createUrl(url: String! shortened: String! ): Url!
	}
`;
