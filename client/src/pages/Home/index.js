function Home() {
	return (
		<main>
			<form>
				<div className="mb-3 form-group">
					<label>Title</label>
					<input type="email" className="form-control" placeholder="Enter the Title" />

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

			<div class="list-group">
				<a href="#" class="list-group-item list-group-item-action active" aria-current="true">
					<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">List group item heading</h5>
						<small>3 days ago</small>
					</div>
					<p class="mb-1">Some placeholder content in a paragraph.</p>
					<small>And some small print.</small>
				</a>
				<a href="#" class="list-group-item list-group-item-action">
					<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">List group item heading</h5>
						<small class="text-muted">3 days ago</small>
					</div>
					<p class="mb-1">Some placeholder content in a paragraph.</p>
					<small class="text-muted">And some muted small print.</small>
				</a>
				<a href="#" class="list-group-item list-group-item-action">
					<div class="d-flex w-100 justify-content-between">
						<h5 class="mb-1">List group item heading</h5>
						<small class="text-muted">3 days ago</small>
					</div>
					<p class="mb-1">Some placeholder content in a paragraph.</p>
					<small class="text-muted">And some muted small print.</small>
				</a>
			</div>
		</main>

	);
}

export default Home;