import React from "react"
import SEO from "../components/seo"
import WaterHeater from "../components/Water-Heater/index"
import Layout from "../components/Water-Heater/layout"

const WaterHeaterPage = () => (
  <>
    <SEO title="water heater" />
    <Layout>
      <WaterHeater />
    </Layout>
  </>
)

export default WaterHeaterPage
