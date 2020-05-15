import React, { Component } from "react"
import "./index.css"
import HeroSection from "./heroSection"
import AboutSection from "./aboutSection"
import BadgeSection from "./badgeSection"

class WaterHeater extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <HeroSection />
        <AboutSection />
        <BadgeSection />
      </React.Fragment>
    )
  }
}

export default WaterHeater
