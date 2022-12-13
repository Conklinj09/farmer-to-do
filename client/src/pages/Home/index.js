import { useQuery } from '@apollo/client';
import { GET_TODOS } from '../../utils/queries';
function Home() {
	const{loading,error,data}=useQuery(GET_TODOS);
	if(loading) return<p>Loading.........</p>
	if(error) return <h2>{error.message}</h2>
	console.log(data);
	return (
		<main>
			<form>
				<div className="mb-3 form-group">
					<label>Title</label>
					<input type="text" className="form-control" placeholder="Enter the Title" />

				</div>
				<div className="mb-3">
					<label>Details</label>
					<input type="text" className="form-control" placeholder="Describe The Detail" />
				</div>
				<div className="mb-3">
					<label>Date</label>
					<input type="date" placeholder="mm/dd/yyyy" className="form-control" />
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>

			<div className="list-group mt-4">
				{data?.getTodos.map(todo => ( 
					<a href="#" className="list-group-item list-group-item-action " aria-current="true">
					<div className="d-flex w-100 justify-content-between">
						<h5 className="mb-1">{todo.title}</h5>
						<small>3 days ago</small>
					</div>
					<p className="mb-1">{todo.detail}.</p>
					<small>And some small print.</small>
				</a>
				

				))}
				
			</div>
		</main>

	);
}

export default Home;