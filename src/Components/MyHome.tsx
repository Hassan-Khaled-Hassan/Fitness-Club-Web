import React from "react";

const MyHome = () => {
  return (
    <section className="home wow flash" id="home">
      <div className="container">
        <h1
          className="wow slideInLeft"
          data-wow-delay="1s"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          It's <span>gym</span> time. Let's go
        </h1>
        <h1
          className="wow slideInRight"
          data-wow-delay="1s"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          We are ready to <span>fit you</span>
        </h1>
      </div>

      <a href="#about" className="go-down">
        <i className="fa fa-angle-down" aria-hidden="true"></i>
      </a>
    </section>
  );
};

export default MyHome;
