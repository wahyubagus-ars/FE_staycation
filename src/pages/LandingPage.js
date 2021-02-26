import React, { Component } from 'react'
import Header from 'parts/header'

export default class LandingPage extends Component {
  render() {
    return (
    <>
      <Header {...this.props}></Header>
    </>
    )
  }
}
