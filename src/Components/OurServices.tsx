import { useState } from "react";

const OurServices = () => {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  return (
    <section className="service" id="service">
      <div className="container">
        <div className="content">
          <div
            className="text box wow slideInLeft"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <h2>Services</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries
            </p>
            <a href="" className="btn">
              Start Now
            </a>
          </div>
          <div
            className="accordian box wow slideInRight"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="500"
          >
            <div
              className={`accordian-container  ${
                activeLink === "one" || activeLink === "" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("one")}
            >
              <div className="head">
                <h4>Cardiovascular Equipment</h4>
                <span className="fa fa-angle-down"></span>
              </div>
              <div className="body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </div>
            <div
              className={`accordian-container  ${
                activeLink === "two" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("two")}
            >
              <div className="head">
                <h4>Strength Training Equipment</h4>
                <span className="fa fa-angle-up"></span>
              </div>
              <div className="body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </div>
            <div
              className={`accordian-container  ${
                activeLink === "three" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("three")}
            >
              <div className="head">
                <h4>Group Fitness className</h4>
                <span className="fa fa-angle-up"></span>
              </div>
              <div className="body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries
                </p>
              </div>
            </div>
            <div
              className={`accordian-container  ${
                activeLink === "four" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("four")}
            >
              <div className="head">
                <h4>Other Services</h4>
                <span className="fa fa-angle-up"></span>
              </div>
              <div className="body">
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
};

export default OurServices;
