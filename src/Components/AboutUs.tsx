import React from 'react'

const AboutUs = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="content">
          <div
            className="box wow bounceInUp"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="600"
          >
            <div className="inner">
              <div className="img">
                <img src="images/about1.jpg" alt="about" />
              </div>
              <div className="text">
                <h4>Free Consultation</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
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
              <div className="img">
                <img src="images/about2.jpg" alt="about" />
              </div>
              <div className="text">
                <h4>Best Training</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
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
              <div className="img">
                <img src="images/about3.jpg" alt="about" />
              </div>
              <div className="text">
                <h4>Build Perfect Body</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs