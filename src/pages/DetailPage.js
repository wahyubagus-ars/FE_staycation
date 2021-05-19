import React, { Component } from 'react'
import Header from "parts/header";
import PageDetailTitle from "parts/PageDetailTitle";
import { connect } from 'react-redux'
import FeaturedImage from 'parts/FeaturedImages';
import Activity from 'parts/Activity';
import Testimoni from 'parts/Testimoni';
import Fade from "react-reveal/Fade";
import BookingForm from 'parts/BookingForm';
import PageDetailDescription from 'parts/PageDetailDescription';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/action/checkout'
import { fetchPage } from 'store/action/page'

class DetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    if (!this.props.page[this.props.match.params.id])
      this.props
        .fetchPage(
          `https://staycation-wahyubagus.herokuapp.com/api/v1/member/detail-page/${this.props.match.params.id}`,
          this.props.match.params.id
        )
  }
  render() {
    const { page, match } = this.props

    if (!page[match.params.id]) return null;
    
    
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm ItemDetails={page[match.params.id]} startBooking={this.props.checkoutBooking}/>
              </Fade>
            </div>
          </div>
        </section>
        <Activity data={page[match.params.id].activityId} />
        <Testimoni data={page[match.params.id].testimonial} />
        <Footer />

      </>
    )
  }
}

const mapStateToProps = (state) => ({
  page: state.page
})

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(DetailPage)
