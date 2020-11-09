import React, { Component } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true, scrollPos: 0 };
  }

  handleScroll() {
    const { scrollPos } = this.state;
    const currentScrollPos = document.body.getBoundingClientRect().top;
    const show = currentScrollPos > scrollPos;
    this.setState({
      scrollPos: currentScrollPos,
      show: show,
    });
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", () => {
      this.handleScroll();
    });
  }

  render() {
    return (
      <div className={this.state.show ? "visible" : "hidden"}>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo}></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link mr-3" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3" href="#">
                  Tutorials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mr-3" href="#">
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
