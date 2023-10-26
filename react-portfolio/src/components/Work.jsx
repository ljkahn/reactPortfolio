import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import littleSiteofHorrors from '../assets/workImages/littleSiteofHorrors.png'
import gameSeekers from '../assets/workImages/gameSeekers.png'
import austynCody from '../assets/workImages/austynCody.png'



function WorkCarousel() {
  return (
    <div>Project

    <Carousel className='carouselSize'>
      <Carousel.Item>
        <img src={littleSiteofHorrors} alt="Little Site of Horrors" className='img-fluid' />
        <Carousel.Caption>
          <h3>Little Site of Horrors</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={gameSeekers} alt="Game Seekers" className ='img-fluid' />
        <Carousel.Caption>
          <h3>Game Seekers</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={austynCody} alt="Austyn Cody Website" className='img-fluid' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img src={text} alt="text" className='img-fluid'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={text} alt="Website" className='img-fluid' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={text} alt="Website" className='img-fluid'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

    </div>
  )
}

export default WorkCarousel;