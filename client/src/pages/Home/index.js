import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../utils/queries';

import totoro from "./images/Totoro-Background.jpeg";

import { TodoContext } from '../../TodoContext';


import AddTodos from '../../components/Todo/AddTodos';
import Todo from '../../components/Todo/Todo';
import { useState } from 'react';
function Home() {
	const [selectedId, setSelectedId] = useState(0);
	const { loading, error, data } = useQuery(GET_TODOS);
	if (loading) return <p>Loading.........</p>
	if (error) return <h2>{error.message}</h2>
	console.log(data);
	return (
		<main>
			<TodoContext.Provider value={{selectedId,setSelectedId}}>

			<div 
			class="bg_image"
			style={{
			 backgroundImage: `url(${totoro})`,
			 backgroundSize: "cover",
			 height: "100vh",
			 color: "#F5F5F5"
			}}		
			className='container todobox'>
				<AddTodos />
				<div className="list-group mt-4">
					{data?.getTodos.map(todo => (

						<Todo key={todo.id}
							id={todo.id}
							title={todo.title}
							detail={todo.detail}
							date={todo.date}
						/>

					))}

				</div>
			</div>
			</TodoContext.Provider>
		</main>

	);
}

export default Home;