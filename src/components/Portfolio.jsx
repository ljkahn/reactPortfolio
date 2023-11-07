import React from "react";
import Carousel from "react-bootstrap/Carousel";

import littleSiteOfHorrors from "../assets/workImages/littleSiteOfHorrors.png";
import gameSeekers from "../assets/workImages/gameSeekers.png";
import austynCody from "../assets/workImages/austynCody.png";
import Blurb from "../assets/workImages/Blurb.png";
import weatherDash from "../assets/workImages/weatherDash.png";
import workDaySched from "../assets/workImages/workDaySched.png";

function WorkCarousel() {
  return (
    <div>
      <Carousel className="position-absolute top-50 start-50 translate-middle carouselSize work">
        <Carousel.Item>
          <a href="https://little-site-of-horrors-1-f45120ac21d1.herokuapp.com/">
            <img
              src={littleSiteOfHorrors}
              alt="Little Site of Horrors"
              className="img-fluid portfolio"
            />{" "}
          </a>
          <Carousel.Caption>
            <h3>Little Site of Horrors</h3>
            <p>
              Full stack application horror movie database with profile feature.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://ljkahn.github.io/videoGameProj/">
            <img
              src={gameSeekers}
              alt="Game Seekers"
              className="img-fluid portfolio"
            />
          </a>
          <Carousel.Caption>
            <h3>Game Seekers</h3>
            <p>Video game finder web app.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://ljkahn.github.io/austynCody/">
            <img
              src={austynCody}
              alt="Austyn Cody Website"
              className="img-fluid portfolio"
            />
          </a>
          <Carousel.Caption>
            <h3>Austyn Cody Tattoos</h3>
            <p>Personal project for Austyn Cody Tattoos.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://blurb4-web-6d7dbae39646.herokuapp.com/">
            <img src={Blurb} alt="text" className="img-fluid portfolio" />
          </a>
          <Carousel.Caption>
            <h3>JavaScript Quiz</h3>
            <p>Quiz that tests your JavaScript knowledge.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://ljkahn.github.io/weatherDashAPI/">
            <img
              src={weatherDash}
              alt="Website"
              className="img-fluid portfolio"
            />
          </a>
          <Carousel.Caption>
            <h3>Weather Dash API</h3>
            <p>
              Web application for retrieving weather data for cities around the
              world using third party API's.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://ljkahn.github.io/workDaySched/">
            <img
              src={workDaySched}
              alt="Website"
              className="img-fluid portfolio"
            />
          </a>
          <Carousel.Caption>
            <h3>Work Day Scheduler</h3>
            <p>An interactive work day scheduler.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default WorkCarousel;
