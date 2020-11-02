import React from "react";

import SearchUser from './SearchUser';

class Github extends React.Component {

  	render() {
    	return (
			<div className="container">
				<SearchUser />

				<div className="row">
					<div className="col-lg-4">
						<img className="img-circle" alt="avatar" width="140" height="140" />
						<h2>@user</h2>
						<p>@name</p>
						<p>Followers: @followers / @following</p>
						<p>
						<a className="btn btn-default" href="/" role="button">
							View details
						</a>
						</p>
					</div>
					<div className="col-lg-8"></div>
				</div>
			</div>
    	);
  	}
}

export default Github;
