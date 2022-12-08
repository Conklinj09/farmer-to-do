const { gql } = require('apollo-server-express');

const typeDefs = gql`
	scalar Date
	type User {
		_id: ID
		username: String
		email: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		me: User
		getTodos:[Todo]
		getTodo(id:ID):Todo
	}
	type Todo {
		id:ID
		title:String
		detail:String
	    date:Date
	}

	type Mutation {
		addUser(username: String!, email: String!, password: String!): Auth
		addTodo(title:String,detail:String,date:Date):Todo
	}
`;

module.exports = typeDefs;
