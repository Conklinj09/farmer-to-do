function Home() {
	return (
		<form>
			<div className="mb-3 form-group">
				<label>Title</label>
				<input type="email" className="form-control" placeholder="Enter the Title" />
					
			</div>
			<div className="mb-3">
				<label>Details</label>
				<input type="text" className="form-control" placeholder="Describe The Detail"/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	);
}

export default Home;