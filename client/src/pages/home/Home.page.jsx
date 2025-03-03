import React from "react"

import Styles from "./Home.module.scss"
import Header from "../../components/homepage/header/Header"
import { Hero } from "../../components/homepage/hero/hero"
import CallToAction from "../../components/homepage/callToAction/CallToAction"
import Footer from "../../components/homepage/footer/Footer"

const HomePage = () => {
  return (
    <div>
      <Header isLogin="false" name="User" />

      <Hero />
      <CallToAction />

      <Footer />
    </div>
  )
}

export default HomePage
