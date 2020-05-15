import React from "react"
import WaterHeaterForm from "./Form"
import ReactIframe from "./Iframe/index"

const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-7 cnt-info-1">
            <p className="first-p">HAWTHORNE PLUMBING SERVICES</p>
            <h1>
              Las Vegas Water Heater Repair <br /> & Installation Services
            </h1>
            <p className="second-p">
              If your water heater has stopped working. Don’t fret! At Hawthorne
              Plumbing, Heating & Cooling we can resolve your broken water
              heater and ensure that the job is done right the first time. While
              most water heaters come with directions on how to reset the unit,
              if you are having difficulty, we strongly advise you to reach out
              to our friendly and experienced professionals. Improper
              modifications to your equipment can be extremely dangerous and may
              cause further damage to your unit. We have the extensive
              experience and in-depth knowledge necessary to perform reliable
              water heater repair.
            </p>
          </div>

          <div className="col-md-5  cnt-info-2">
            <p className="third-p">Schedule Your Appointment Today!</p>
            {/* <WaterHeaterForm /> */}
            <ReactIframe />

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

