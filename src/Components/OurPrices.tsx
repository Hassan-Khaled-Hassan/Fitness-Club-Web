import React from 'react'

const OurPrices = () => {
  return (
    <section className="price-package" id="price">
      <div className="container">
        <h2>Choose Your Package</h2>
        <p className="title-p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,{" "}
        </p>
        <div className="content">
          <div
            className="box wow bounceInUp"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
          >
            <div className="inner">
              <div className="price-tag">$59/Month</div>
              <div className="img">
                <img src="images/price1.jpg" alt="price" />
              </div>
              <div className="text">
                <h3>Body Building Training</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href="" className="btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="box wow bounceInUp"
            data-wow-delay="0.2s"
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="600"
          >
            <div className="inner">
              <div className="price-tag">$69/Month</div>
              <div className="img">
                <img src="images/price2.jpg" alt="price" />
              </div>
              <div className="text">
                <h3>Body Building Training</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href="" className="btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div
            className="box wow bounceInUp"
            data-wow-delay="0.4s"
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="600"
          >
            <div className="inner">
              <div className="price-tag">$99/Month</div>
              <div className="img">
                <img src="images/price3.jpg" alt="price" />
              </div>
              <div className="text">
                <h3>Body Building Training</h3>
                <p>Get Free WiFi</p>
                <p>Month to Month</p>
                <p>No Time Restrictions</p>
                <p>Gym and Cardio</p>
                <p>Service Locker Rooms</p>
                <a href="" className="btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurPrices