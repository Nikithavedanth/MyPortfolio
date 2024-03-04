import './projects.css';
import { Data } from '../projects/data.jsx';
import { Carousel } from 'react-bootstrap';
// import { ScrollDown } from './scrolldown.jsx';

export function Projects() {
  return (
    <div>
      <section id='projects' className='projects container section'style={{display:'grid',placeItems:'center'}}>
        <center>
          <h2 className='section__title'>Projects </h2>
        </center>
        <span className='section_subtitle'>My experience with different projects</span>
        <Carousel
          className="projects__container"
          indicators={true} // Show pagination indicators
          interval={null} // Disable auto sliding
        >
          {Data.map(({ id, image, title, description }) => {
            return (
            <Carousel.Item key={id}>
                <div className="carousel-image-container">
                  <img
                    className="d-block w-100 carousel-image"
                    src={image}
                    alt=""
                  />
                  <div className="image-overlay"></div>
                </div>
                <Carousel.Caption>
                  <h3 className='projects__name'>{title}</h3>
                  <p className='projects__description'>{description}</p>
                </Carousel.Caption>
            </Carousel.Item>
              
            )
          })}
        </Carousel>
      </section>
      {/* <ScrollDown/> */}
      <br></br> 
          <br></br>
          <br></br>
          <br></br>
    </div>
  )
}
