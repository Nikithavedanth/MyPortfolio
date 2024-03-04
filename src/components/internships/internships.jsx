import React from 'react'; // Import React if not already imported
import { Data } from './data';
import './internships.css';

export function Internships() {
  return (
    <section className="internships section" style={{display: 'grid',
    placeItems: 'center'}}id='internships'>
      <h2 className="section__title">Internships</h2>
      <span className="section__subtitle">My work experience</span><br></br>
      <div className="internships__container container grid d-flex" style={{marginLeft:'260px'}}>
        
          {Data.map((item) => (
            <div className="flip-card me-3 " key={item.title}>
            <div className="flip-card-inner" >
              <div className="flip-card-front"style={{marginTop:'100px'}}>
                <h5>{item.title}</h5>
                <h6>{item.description}</h6>
                <h6>{item.role}</h6>
                <i className='uil uil-graduation-cap'></i>
              </div><br></br>
              <div className="flip-card-back">
                <p>{item.details}</p>
              </div>
            </div>
            </div>
          ))}
       
      </div>
    
      
    </section>

   
  );
}

