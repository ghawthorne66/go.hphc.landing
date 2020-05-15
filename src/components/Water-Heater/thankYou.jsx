import React from "react"
import { Link } from "gatsby"

const WaterHeaterThankYou = () => {
  return (
    <React.Fragment>
      <div class="jumbotron text-center mb-0">
        <img
          clasName="img-fluid mb-4"
          src={require("../../images/success.png")}
        />
        <h1 class="display-3 mt-4">Thank You!</h1>
        <p class="lead">
          <strong>Your Message Have Been Received</strong>. We will contact you
          shortly
        </p>
        <hr />

        <p class="lead">
          <Link class="btn btn-primary btn-sm" to="/" role="button">
            Continue to homepage
          </Link>
        </p>
      </div>
    </React.Fragment>
  )
}

export default WaterHeaterThankYou
