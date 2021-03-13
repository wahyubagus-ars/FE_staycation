import React, { Component } from 'react'
import Header from 'parts/header'
import LandingPageJSON from 'json/landingPage.json'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'

export default class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef()
  }
  render() {
    return (
    <>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={LandingPageJSON.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={LandingPageJSON.mostPicked}/>
    </>
    )
  }
}
