

const OurSchedule = () => {
  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <div className="content">
          <div
            className="box text wow slideInLeft"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="400"
          >
            <h2>Classes Schedule</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
            <img src="images/schedule1.png" alt="schedule" />
          </div>
          <div
            className="box timing wow slideInRight"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="400"
          >
            <table className="table">
              <tbody>
                <tr>
                  <td className="day">Monday</td>
                  <td>
                    <strong>9:00 AM</strong>
                  </td>
                  <td>
                    Body Building <br /> 9:00 to 10:00 AM
                  </td>
                  <td>Room No:210</td>
                </tr>
                <tr>
                  <td className="day">Tuesday</td>
                  <td>
                    <strong>9:00 AM</strong>
                  </td>
                  <td>
                    Body Building <br /> 9:00 to 10:00 AM
                  </td>
                  <td>Room No:210</td>
                </tr>
                <tr>
                  <td className="day">Wednesday</td>
                  <td>
                    <strong>9:00 AM</strong>
                  </td>
                  <td>
                    Body Building <br /> 9:00 to 10:00 AM
                  </td>
                  <td>Room No:210</td>
                </tr>
                <tr>
                  <td className="day">Thursday</td>
                  <td>
                    <strong>9:00 AM</strong>
                  </td>
                  <td>
                    Body Building <br /> 9:00 to 10:00 AM
                  </td>
                  <td>Room No:210</td>
                </tr>
                <tr>
                  <td className="day">Friday</td>
                  <td>
                    <strong>9:00 AM</strong>
                  </td>
                  <td>
                    Body Building <br /> 9:00 to 10:00 AM
                  </td>
                  <td>Room No:210</td>
                </tr>
                <tr>
                  <td className="day">Saturday</td>
                  <td>
                    <strong>9:00 AM</strong>
                  </td>
                  <td>
                    Body Building <br /> 9:00 to 10:00 AM
                  </td>
                  <td>Room No:210</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSchedule