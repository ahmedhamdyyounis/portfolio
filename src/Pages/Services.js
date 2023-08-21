import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Services() {
  return (
    <section className="services min-vh-100">
      <div className="container layout w-lg-100">
        <div className="section-header">
          <p className=" section-info">- SERVICES</p>
          <div className="w-100 flex-wrap gap-3 d-flex justify-content-between align-items-center">
            <h4 className=" my-3">My Services</h4>
            <NavLink className="" to="mailto:ahmed.hahmed@hdb-egy.com">
              ahmed.hahmed@hdb-egy.com
            </NavLink>
          </div>
          <div className="row row-cols-1 row-cols-md-2 g-4 my-4 ">
            <div className="col">
              <div className="card  p-4 ">
                <p className="card-title">01</p>
                <h5>Web design</h5>
                <p className="col-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.{' '}
                </p>
                <div className="read-more d-flex gap-3 align-items-center">
                  <p className="m-0 ">Read more</p>
                  <i className=" fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  p-4 ">
                <p className="card-title">01</p>
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                <p>hello there </p>
                <div className="read-more d-flex gap-3 align-items-center">
                  <p className="m-0 ">Read more</p>
                  <i className=" fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  p-4 ">
                <p className="card-title">01</p>
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                <p>hello there </p>
                <div className="read-more d-flex gap-3 align-items-center">
                  <p className="m-0 ">Read more</p>
                  <i className=" fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card  p-4 ">
                <p className="card-title">01</p>
                <h5>Lorem ipsum dolor sit amet consectetur.</h5>
                <p>hello there </p>
                <div className="read-more d-flex gap-3 align-items-center">
                  <p className="m-0 ">Read more</p>
                  <i className=" fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
