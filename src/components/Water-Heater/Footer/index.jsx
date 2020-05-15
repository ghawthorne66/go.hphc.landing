import React, { Component } from "react"
import "./footer.module.css"

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid footer-logo-1"
                src={require("../images/safe-logo.png")}
                alt=""
              />
              <img
                className="img-fluid footer-logo-2"
                src={require("../images/bbb-logo.jpeg")}
                alt=""
              />
            </div>

            <div className="col-md-6">
              <p className="footer-p1">
                © 2020 Hawthorne Plumbing, Heating. & Cooling | Privacy Policy
              </p>
              <p className="footer-p2">
                NV CONT LIC :#0055673 C1 | #0070845 C21 $50,000 limit
              </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
