import React, { Component } from "react";
import "./Competitions.css";
import { COMPETITIONS } from "../assets/CompetitionsDetail";

class Competitions extends Component {
  constructor(props) {
    super(props);
    this.state = { competition_type: null, show_rank: null };
  }

  handleMouseOver(competition) {
    this.setState({ show_rank: competition });
  }

  handleMouseLeave() {
    this.setState({ show_rank: null });
  }

  handleClick(event) {
    const card = event.target;
    const card_title = card.childNodes[1].childNodes[0];
    const competition_type = card_title.innerHTML;
    if (this.state.competition_type !== competition_type) {
      this.setState({ competition_type });
    } else {
      this.setState({ competition_type: null });
    }
  }

  renderCompetition(competition) {
    return (
      <div
        className="card flex-fill"
        onMouseOver={(e) => {
          this.handleMouseOver(competition);
        }}
        onMouseLeave={(e) => {
          this.handleMouseLeave();
        }}
      >
        {this.state.show_rank !== competition ? (
          <img src="#" className="card-img-top" alt="graphic design"></img>
        ) : null}

        {this.state.show_rank !== competition ? (
          <div className="card-body">
            <h5 className="card-title">{competition.name}</h5>
            <p className="card-text">{competition.date}</p>
          </div>
        ) : (
          <div className="card-body" id="ranking_list">
            <ul className="card-text">
              <li>#1: {competition.rankings.first}</li>
              <li>#2: {competition.rankings.second}</li>
              <li>#3: {competition.rankings.third}</li>
            </ul>
          </div>
        )}
      </div>
    );
  }

  renderPastCompetitions(competitions) {
    let past_competitions = [...competitions];
    past_competitions = past_competitions.map((elem, idx) => {
      return (
        <div className="col-12 col-sm-6 col-md-3 d-flex" key={idx}>
          {this.renderCompetition(elem)}
        </div>
      );
    });
    console.log(past_competitions);

    return (
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3 d-flex">
          <div
            className="card flex-fill"
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
        <div id="past_competitions">{past_competitions}</div>
      </div>
    );
  }

  render() {
    const active_competitions = COMPETITIONS.filter((elem) => {
      return elem.status === "active";
    });
    active_competitions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    const past_competitions = COMPETITIONS.filter((elem) => {
      return elem.status === "past";
    });
    past_competitions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    const future_competitions = COMPETITIONS.filter((elem) => {
      return elem.status === "comming_soon";
    });
    future_competitions.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });

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
            {this.renderCompetition(active_competitions[0])}
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            {this.renderCompetition(active_competitions[1])}
          </div>
          <div className="col-12 col-sm-6 col-md-3 d-flex">
            <div
              className="card flex-fill"
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
              className="card flex-fill"
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
        {this.state.competition_type
          ? this.renderPastCompetitions(past_competitions)
          : null}
      </div>
    );
  }
}

export default Competitions;
