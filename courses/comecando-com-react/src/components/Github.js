import React from "react";

class Github extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>GitHub Info</h1>
          <div className="row">
            <form>
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

        <div className="row">
          <div className="col-lg-4">
            <img
              className="img-circle"
              alt="avatar"
              width="140"
              height="140"
            />
            <h2>@user</h2>
            <p>@name</p>
            <p>
              Followers: @followers / @following
            </p>
            <p>
              <a
                className="btn btn-default"
                href="/"
                role="button"
              >
                View details
              </a>
            </p>
          </div>
          <div className="col-lg-8">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Github;
