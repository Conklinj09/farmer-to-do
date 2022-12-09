const { AuthenticationError } = require('apollo-server-express');
const { User, Todo } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find({}).select('-password');
		},
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

				return userData;
			}

			throw new AuthenticationError('Not logged in');
		},
		getTodos: async () => {
			const todos = await Todo.find();
			return todos;
		},
		getTodo: async (root, args) => {
			const todo = await Todo.findById(args.id);
			return todo;
		},
	},


	Mutation: {
		addUser: async (_, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		addTodo: async (root, args) => {
			const newTodo = new Todo({ title: args.title, detail: args.detail, date: args.date })
			await newTodo.save()
			return newTodo
		},
		deleteTodo: async (root, args) => {
			
			
		},
		updateTodo:async (root, args) => {
			const{id,title,detail,date} = args
			const updatedTodo = {};
			
			if(title!=undefined){
				updatedTodo.title = title;
			}
			if(detail!=undefined){
				updatedTodo.detail = detail;
			}
			if(date!=undefined){
				updatedTodo.date = date;
			}
			const todo = await Todo.findByIdAndUpdate(id,updatedTodo,{new:true})
			return todo;
		}
	}
}


module.exports = resolvers;
