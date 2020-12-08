import React, { Component } from "react";
import "./contactUs.css";
import IPL_Auction from "../assets/IPL_Auction.jpeg";

class Contactus extends Component {
  constructor(props) {
    super(props);
    this.state = { team: null };
  }
  // handleClick(event) {
  //   const team=team2020.innerHTML;
  //   if (this.state.team !== team) {
  //     this.setState({ team });
  //   } else {
  //     this.setState({ team: null });
  //   }
  // }
  renderTeam(team2020) {
    return (
      <div className="col-12 col-sm-6 col-md-3 d-flex">
        <div class="img-with-text">
          <img src={IPL_Auction}  alt="sometext"></img>
          <p>Some text</p>
        </div>
        <div class="img-with-text">
          <img src={IPL_Auction}  alt="sometext" ></img>
          <p>Some text</p>
        </div>
        <div classname="core-team">
          <h1>coreTeamdsjifffffffFFFfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffkddddddddd</h1>
        </div>
      </div>
    );
  }

  render() {
    return (
    <div className="container mt-5">
      <div className="row">
        <h2>Contact Us</h2>
      </div>
      
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
      <p>bla bla bla bla bla bla bla bla bla bla</p>
      <div className="row">
          <h2 id="h1">email:<a href="mailto:parasjain1237@gmail.com">parasjain1237@gmail.com</a>    </h2>
          <h2 id="h2">phone: 8905336393</h2>
      </div>
      <div >
        {/* <div className="col-12 col-sm-6 col-md-3 d-flex"> */}
              {/* <div
                className="team2020"
                onClick={(e) => {
                  this.handleClick(e);
                }}
              > */}
          <h3 className="mr-auto">Team2020</h3>
          {/* </div> */}
          <h3  >previous year teams</h3>
        {/* </div> */}
      <div className="row" id="footer">
        {/* <div className="col-12 col-sm-6 col-md-12 d-flex" id="column">
          <img src={IPL_Auction}  className="d-block w-100" alt="..." id="h"></img>
          <img src={IPL_Auction}  className="d-block w-100" alt="..." id="h"></img>
        </div> */}
      </div>
      {/* <a href="#" class="fa fa-facebook"></a>
      <a href="#" class="fa fa-instagram"></a> */}
      {/* {this.renderTeam()} */}
    </div>
  </div>
    );
  }
}

export default Contactus;



