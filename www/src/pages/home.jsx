import React from "react";

const Home = () => {
  return (
    <div>
      <nav className="navbar justify-content-between">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <h1 className="mb-0">
            <i class="bi bi-taxi-front-fill"></i>
          </h1>
          <div className="ms-2">Yellow Taxi</div>
        </a>
        <button className="btn-secondary">Start Map</button>
      </nav>
      <div className="container">
        <div className="card mt-5">
            <div className="card-header text-start">
                <h4>Map Here!</h4>
            </div>
            <div className="card-body">Map...</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
