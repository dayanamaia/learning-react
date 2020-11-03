import React, { useState } from 'react';

import GitHubUserService from '/src/services/GitHubUserService';

const SearchUser = () => {
	const [userName, setUserName] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		if (userName !== '') {
			GitHubUserService.getByUserName(userName).then((response) => {
				console.log(response);
			});
		}
		
		setUserName('');
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
						placeholder="Ex.: @dayanamaia"
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
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