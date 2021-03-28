import React from 'react'
import Button from 'elements/Button/index'
import ImageHero from 'assets/images/picture.jpg'
import ImageFrame from 'assets/images/frame.jpg'
import IconLocation from 'assets/images/icon/ic_cities.svg'
import IconTraveler from 'assets/images/icon/ic_traveler.svg'
import IconTreasure from 'assets/images/icon/ic_treasure.svg'
import Fade from 'react-reveal/Fade';
import numberFormat from 'utils/formatNumber'

export default function Hero(props) {
  function showMostPicked(){
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    })
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{width: 530}}>
            <h1 className="h2 font-weight-bold line-height-1 mb-5">
              Forget Busy Work,<br/>
              Start Next Vacation
            </h1>
            <p className="mb-5 font-weight-light gray-500 2-75" style={{ maxWidth: 300 }}>
              We provide what you need to enjoy your
              holiday with family. Time to make another 
              memorable moments.
            </p>
            <Button className="btn px-5 mb-5" hasShadow isPrimary onClick={showMostPicked}>
              Show Me Now
            </Button>
            <div className="row mt-5">
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img src={IconTraveler} alt="" width="36" height="36"/>
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img src={IconTreasure} alt="" width="36" height="36"/>
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasures
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img src={IconLocation} alt="" width="36" height="36"/>
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Cities
                  </span>
                </h6>
              </div>
            </div>
          </div>
        <div className="col-6 pl-5">
          <div className="image-hero" style={{width: 520, height: 370}}>
            <img src={ImageHero} alt="" className="img-fluid position-absolute" style={{ margin: '-30px 0 0 -30px', zIndex: 1 }} />
            <img src={ImageFrame} alt="" className="img-fluid position-absolute" style={{ margin: '0 -35px -35px 0' }} />
          </div>
        </div>
        </div>
      </section>
    </Fade>
  )
}