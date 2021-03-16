import Button from 'elements/Button'
import React from 'react'

export default function Categories({data}) {
  return data.map((category, index) => {
    return <section className="container" key={`categori-${index}`}>
      <h4 className="mb-3 font-weight-medium">
        {category.name}
      </h4>
      <div className="container-grid">
        {
          category.items.legnth === 0 
            ? <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            : category.items.map((item, index2) => {
              return <div className="item column-3 row-1" key={`category-${index}-item-${index2}`}>
                <div className="card">
                  {item.isPopular && (
                    <div className="tag">
                      Popular{" "}
                      <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{height: 180}}>
                    <img src={item.imageUrl} alt={item.name} className="img-cover"/>
                  </figure>
                  <div className="meta-wrapper">
                    <Button type="link" href={`/properties/${item._id}`} className="stretched-link d-block text-gray-000">
                      <h5 className="h4">{item.name}</h5>
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
