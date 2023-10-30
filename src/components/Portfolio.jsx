import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import littleSiteOfHorrors from '../assets/workImages/littleSiteOfHorrors.png'
import gameSeekers from '../assets/workImages/gameSeekers.png'
import austynCody from '../assets/workImages/austynCody.png'
import javaQuiz from '../assets/workImages/javaQuiz.png'
import weatherDash from '../assets/workImages/weatherDash.png'
import workDaySched from '../assets/workImages/workDaySched.png'



function WorkCarousel() {
  return (
    <div>

    <Carousel className='position-absolute top-50 start-50 translate-middle carouselSize work'>
      <Carousel.Item>
        <img src={littleSiteOfHorrors} alt="Little Site of Horrors" className='img-fluid portfolio' />
        <Carousel.Caption>
          <h3>Little Site of Horrors</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={gameSeekers} alt="Game Seekers" className ='img-fluid portfolio' />
        <Carousel.Caption>
          <h3>Game Seekers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={austynCody} alt="Austyn Cody Website" className='img-fluid portfolio' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={javaQuiz} alt="text" className='img-fluid portfolio'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={weatherDash} alt="Website" className='img-fluid portfolio' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={workDaySched} alt="Website" className='img-fluid portfolio'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default WorkCarousel;