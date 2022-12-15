import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../utils/queries';


import AddTodos from '../../components/Todo/AddTodos';
import Todo from '../../components/Todo/Todo';
function Home() {
	const { loading, error, data } = useQuery(GET_TODOS);
	if (loading) return <p>Loading.........</p>
	if (error) return <h2>{error.message}</h2>
	console.log(data);
	return (
		<main>

			<div className='container todobox'>
				<AddTodos />
				<div className="list-group mt-4">
					{data?.getTodos.map(todo => (

						<Todo key={todo.id}
							title={todo.title}
							detail={todo.detail}
							date={todo.date}
						/>

					))}

				</div>
			</div>
		</main>

	);
}

export default Home;