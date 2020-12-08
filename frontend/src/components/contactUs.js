import React, { Component } from "react";
import "./contactUs.css";
import IPL_Auction from "../assets/IPL_Auction.jpeg";

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = { team: false };
  }
  handleClick(event) {
    this.setState({ team: !this.state.team });
  }
  renderTeam(team2020) {
    return (
      <div className="row mt-3">
        <div className="col-12  col-md-4 d-flex">
          <div className="card flex-fill bg-dark">
            <a href="https://www.youtube.com" target="_blank">
              <img
                src="#"
                className="card-img-top"
                alt="user interface design"
              ></img>
            </a>
            <div className="card-body">
              <h5 className="card-title">NAYaN kharakhar</h5>
            </div>
          </div>
        </div>
        <div className="col-12  col-md-4 d-flex">
          <div className="card flex-fill bg-dark">
            <img
              src="#"
              className="card-img-top"
              alt="user interface design"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Satyajit thakur</h5>
            </div>
          </div>
        </div>
        <div className="col-12  col-md-4 d-flex">
          <p>hello</p>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div className="container mt-5" id="contact">
        <div className="row">
          <h2>Contact Us</h2>
        </div>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}

        <div className="row">
          <p>
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla blabla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla
          </p>
        </div>
        <div className="row d-flex justify-content-between bg-black mt-3">
          <div>
            Email: <a href="mailto:ee">designauts@abcabcabc</a>
          </div>
          <div>Phone: 8905336393</div>
        </div>
        <div>
          <div className="row d-flex justify-content-between bg-black mt-3">
            <div
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              Team2020
            </div>
            <div>previous year teams</div>
          </div>
          {/* </div> */}
          {this.state.team ? this.renderTeam() : null}
          <div className="row mt-3" id="footer">
            <div className="col-12 col-sm-6 ">
              <img
                src={IPL_Auction}
                className="d-block w-100 mr-3"
                alt="..."
                id="h"
              ></img>
            </div>
            <div className="col-12 col-sm-6 ">
              <img
                src={IPL_Auction}
                className="d-block w-100"
                alt="..."
                id="h"
              ></img>
            </div>
          </div>
          {/* <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-instagram"></a> */}
        </div>
      </div>
    );
  }
}

export default Contactus;
