import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from 'parts/header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Categories from 'parts/Categories'
import Testimoni from 'parts/Testimoni'
import Footer from 'parts/Footer'
import { FETCH_PAGE } from 'store/types'
import { fetchPage } from 'store/action/page'
class LandingPage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef()
  }

  componentDidMount(){
    window.title = "Staycation | Home"

    if (!this.props.page.landingPage) {
      this.props.fetchPage('https://staycation-wahyubagus.herokuapp.com/api/v1/member/landing-page', 'landingPage')
    }
  }

  render() {
    const { page } = this.props

    console.log(page)

    if (!page.hasOwnProperty('landingPage')) return null;

    return (
    <>
      <Header {...this.props}></Header>
      <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
      <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostPicked}/>
      <Categories data={page.landingPage.category} />
      <Testimoni data={page.landingPage.testimonial} />
      <Footer />
    </>
    )
  }
}

const mapStateToProps = (state) => ({
  // page: state.page ? state.page.landingPage : null
  page: state.page
})

export default connect(mapStateToProps, { fetchPage })(LandingPage)
