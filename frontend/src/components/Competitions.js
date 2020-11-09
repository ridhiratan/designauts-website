import React, { Component } from "react";
import "./Competitions.css";

class Competitions extends Component {
  constructor(props) {
    super(props);
    this.state = { competition_type: null };
  }

  handleMouseOver(e) {
    console.log(e.type);
  }

  handleMouseLeave(e) {
    console.log(e.type);
  }

  handleClick(event) {
    const card = event.target;
    const card_body = card.childNodes[1];
    const card_title = card_body.childNodes[0];
    const competition_type = card_title.innerHTML;
    if (this.state.competition_type != competition_type) {
      this.setState({ competition_type });
    } else {
      this.setState({ competition_type: null });
    }
  }

  render() {
    return (
      <div className="container mt-5">
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
            <div
              className="card flex-fill bg-dark"
              onClick={(e) => {
                this.handleClick(e);
              }}
              onMouseOver={(e) => {
                this.handleMouseOver(e);
              }}
              onMouseLeave={(e) => {
                this.handleMouseLeave(e);
              }}
            >
              <img src="#" className="card-img-top" alt="graphic design"></img>
              <div className="card-body">
                <h5 className="card-title">UI Design</h5>
                <p className="card-text">Date</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div
              className="card flex-fill bg-dark"
              onClick={(e) => {
                this.handleClick(e);
              }}
              onMouseOver={(e) => {
                this.handleMouseOver(e);
              }}
              onMouseLeave={(e) => {
                this.handleMouseLeave(e);
              }}
            >
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
            <div
              className="card flex-fill bg-dark"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              <img src="#" className="card-img-top" alt="digital art"></img>
              <div className="card-body">
                <h5 className="card-title">more from the past...</h5>
                <p className="card-text">Date</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div
              className="card flex-fill bg-dark"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
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
        <div className="row">
          {this.state.competition_type ? this.state.competition_type : null}
        </div>
      </div>
    );
  }
}

export default Competitions;
