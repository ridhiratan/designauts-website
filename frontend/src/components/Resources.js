import React from "react";
import "./Resources.css";

function Resources() {
  return (
    <div className="container mt-5" id="resources">
      <div className="row">
        <h2>Resources</h2>
      </div>
      <div className="row bg-black mb-3">Recommended Websites:</div>

      <div className="row">
        <div className="col-12 col-sm-6 col-md-3 d-flex">
          <div className="card flex-fill bg-dark">
            <img src="#" className="card-img-top" alt="graphic design"></img>
            <div className="card-body">
              <h5 className="card-title">Graphic Design</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 d-flex">
          <div className="card flex-fill bg-dark">
            <img
              src="#"
              className="card-img-top"
              alt="user interface design"
            ></img>
            <div className="card-body">
              <h5 className="card-title">User Interface Design</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 d-flex">
          <div className="card flex-fill bg-dark">
            <img src="#" className="card-img-top" alt="digital art"></img>
            <div className="card-body">
              <h5 className="card-title">Digital Art</h5>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3 d-flex">
          <div className="card flex-fill bg-dark">
            <img
              src="#"
              className="card-img-top"
              alt="animations game design"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Animations Game Design</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
