import Button from 'elements/Button'
import React from 'react'
import IconText from 'parts/iconText'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{width: 350}}>
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday
              instantly and memorable.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">
              For Beginners
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">New Account</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">New Account</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">New Account</Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">
              Explore us
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">Ours carreer</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">Privacy</Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/register">Term condition</Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">
              Connect us
            </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button isExternal type="link" href="/register">Email</Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="/register">021 - 2208 - 1996</Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Kemang, Jakarata</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}
