import React, { Component } from "react";

class Competition extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Competitions</h2>
        </div>
        <p>
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
        </p>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div className="card flex-fill">
              <img src="#" className="card-img-top" alt="graphic design"></img>
              <div className="card-body">
                <h5 className="card-title">UI Design</h5>
                <p className="card-text">Date</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div className="card flex-fill">
              <img
                src="#"
                className="card-img-top"
                alt="user interface design"
              ></img>
              <div className="card-body">
                <h5 className="card-title">Digital Arts</h5>
                <p className="card-text">Date</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div className="card flex-fill">
              <img src="#" className="card-img-top" alt="digital art"></img>
              <div className="card-body">
                <h5 className="card-title">more from the past...</h5>
                <p className="card-text">Date</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div className="card flex-fill">
              <img
                src="#"
                className="card-img-top"
                alt="animations game design"
              ></img>
              <div className="card-body">
                <h5 className="card-title">comming soon</h5>
                <p className="card-text">Date</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Competition;
