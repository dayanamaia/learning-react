import React from 'react';

const SearchUser = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	}

	return(
		<div className="jumbotron">
			<h1>GitHub Info</h1>
			<div className="row">
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Username</label>
						<input
						type="text"
						className="form-control"
						placeholder="Ex: matheusml"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
					Buscar
					</button>
				</form>
			</div>
		</div>
	)
}

export default SearchUser;