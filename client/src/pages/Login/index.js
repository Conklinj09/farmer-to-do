// these queries are here for example ONLY
import { QUERY_USERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
// END example

function About() {
	const { loading, data } = useQuery(QUERY_USERS);

	const users = data?.users || [];

	return (
		<h1>
			This is the about page. 
			We have created a MERN Stack application that runs a To-Do List.


			{loading ? (
				<div>Loading ...</div>
			) : (
					<div>
						{users.map(user => {
							return <p key={user._id}>{user.email}</p>
						})}
					</div>
			)}
		</h1>
	);
}

export default About;