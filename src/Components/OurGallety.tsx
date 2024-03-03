

const OurGallety = () => {
  return (
    <section className="gallery" id="gallery">
      <h2>Workout Gallery</h2>
      <div className="content">
        <div
          className="box wow slideInLeft"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="400"
        >
          <img src="images/gallery1.jpg" alt="gallery" />
        </div>
        <div
          className="box wow slideInRight"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="400"
        >
          <img src="images/gallery2.jpg" alt="gallery" />
        </div>
        <div
          className="box wow slideInLeft"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="400"
        >
          <img src="images/gallery3.jpg" alt="gallery" />
        </div>
        <div
          className="box wow slideInRight"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="400"
        >
          <img src="images/gallery4.jpg" alt="gallery" />
        </div>
      </div>
    </section>
  );
}

export default OurGallety