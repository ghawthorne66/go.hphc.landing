import React, { Component } from "react"
import "./index.css"

class Header extends Component {
  render() {
    return (
      <header id="head">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={require("../images/logo.png")}
                alt="title-img"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6 text-center">
              <p className="head-first-para">24/7 Emergency Service</p>
              <p className="head-second-para">
                <i className="fa fa-phon]e-alt"></i>
                <a href="tel: +17022139574">(702) 213-9574</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
