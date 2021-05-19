import Button from 'elements/Button'
import React from 'react'

export default function Categories({data}) {
  return data.map((category, index) => {
    if ( category.itemId.length == 0 ) return null
      return <section className="container" key={`categori-${index}`}>
      <h4 className="mb-3 font-weight-medium">
        {category.name}
      </h4>
      <div className="container-grid">
        {
            category.itemId.map((item, index2) => {
              return <div className="item column-3 row-1" key={`category-${index}-item-${index2}`}>
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular{" "}
                      <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{height: 180}}>
                    <img src={`${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`} alt={item.title} className="img-cover"/>
                  </figure>
                  <div className="meta-wrapper">
                    <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-gray-000">
                      <h5 className="h4">{item.title}</h5>
                    </Button>
                    <span className="text-gray-500">
                      {item.city}, {item.country}
                    </span>
                  </div>
                </div>
              </div>
            })
        }
      </div>
    </section>
  })
}
