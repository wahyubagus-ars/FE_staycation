import React, { Component } from 'react'
import Header from "parts/header";
import PageDetailTitle from "parts/PageDetailTitle";
import ItemDetails from 'json/itemDetails'
import { connect } from 'react-redux'
import FeaturedImage from 'parts/FeaturedImages';
import Categories from 'parts/Categories';
import Testimoni from 'parts/Testimoni';
import Fade from "react-reveal/Fade";
import BookingForm from 'parts/BookingForm';
import PageDetailDescription from 'parts/PageDetailDescription';
import Footer from 'parts/Footer';

import { checkoutBooking } from 'store/action/checkout'

class DetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={ItemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm ItemDetails={ItemDetails} startBooking={this.props.checkoutBooking}/>
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories} />
        <Testimoni data={ItemDetails.testimonial} />
        <Footer />

      </>
    )
  }
}

export default connect(null, { checkoutBooking })(DetailPage )
