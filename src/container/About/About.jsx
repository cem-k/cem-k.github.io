import React from "react";
import { images } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="about" id="About">
      <div className="flexbox">
        <div className="item">
          <h1>
            Go from <span className="gradientRed">this ...</span>
          </h1>
          <div className="img">
            <img src={images.manual} />
          </div>

          <div className="parentBox box">
            <div className="img">
              <FontAwesomeIcon
                icon="fa-solid fa-person-digging"
                className="icon orange"
              />
            </div>
            <div className="text">
              <b>Reduce manual work</b>
              <p>
                Digital solutions are revolutionizing the education system. This
                is how we make seat maps automated and reduce manual work.
              </p>
            </div>
          </div>

          <div className="parentBox">
            <div className="box">
              <div className="img">
                <FontAwesomeIcon
                  icon="fa-regular fa-face-sad-tear"
                  className="icon orange"
                />
              </div>
              <div className="text">
                <b>Spend energy on what really matters</b>
                <p>
                  These are the things teachers have to stress about when
                  creating a new map:
                </p>
              </div>
            </div>

            <div className="fullBoxContent">
              <p>
                Who should sit together?
                <br />
                Who should not sit close?
                <br />
                Who should sit in the front?
                <br />
                Who should sit in the back?
                <br />
                Everyone should get a new partner?
                <br />
                Everyone should get a new seat?
              </p>
              <b>- How can I make all of this work ?!</b>
              <p>Teachers use on average 30 minutes to make a manual map.</p>
            </div>
          </div>
        </div>

        <div className="item">
          <h1>
            ... to <span className="gradientGreen">this</span>
          </h1>
          <div className="img">
            <img src={images.makemap} />
          </div>
          <div className="parentBox box">
            <div className="img">
              <FontAwesomeIcon
                icon="fa-regular fa-clock"
                className="icon green"
              />
            </div>
            <div className="text greenB">
              <b>Save time</b>
              <p>
                To use the generator takes 2 minutes. You simply upload your
                student list, choose your conditions, and there you have a
                generated map, fully customizable.
              </p>
            </div>
          </div>
          <div className="parentBox">
            <div className="box">
              <div className="img">
                <FontAwesomeIcon
                  icon="fa-solid fa-dollar-sign"
                  className="icon green"
                />
              </div>
              <div className="text greenB">
                <b>Save money</b>
                <p>
                  To make seat maps manually costs your school €400 per teacher
                  per year.
                </p>
              </div>
            </div>
            <div className="fullBoxContent">
              <p>
                A new map is on average made every 3-4 weeks. A teacher in
                Norway has an average hourly salary of €30. That equals a cost
                price of €400 per teacher per year. Saved time is saved money!
              </p>
            </div>
          </div>
          <div className="parentBox box">
            <div className="img">
              <FontAwesomeIcon icon="fa-solid fa-bolt" className="icon green" />
            </div>
            <div className="text greenB">
              <b>Save your mood</b>
              <p>
                Being a teacher is stressful enough. Save your patience to where
                it is needed, don't waste it on paperwork.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button>Coming soon!</button>
      <br />
      <br />
    </div>
  );
};

export default About;
