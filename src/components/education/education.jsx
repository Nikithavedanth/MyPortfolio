// import imageSrc from '../../assets/NWMSU.jpg';
// import imgSrc from '../../assets/MGIT.jpeg';
import { useState} from 'react';
import './education.css';
// import { ScrollDown } from './scrolldown';
export function Education(){
  const [toggleState,setToggleState]=useState(1);
  const toggleTab=(index)=>{
    setToggleState(index);

};
    return(
      <div>
      <section style={{display: 'grid',
      placeItems: 'center'}}className='qualification sections' id="education" >
        <h2 className='section_title'style={{fontSize:'30px'}}>Educational Qualifications</h2>  
        <span className='section__subtitle'>My educational background</span><br></br>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div onClick={()=>toggleTab(1)} className={toggleState===1?'qualification__button qualification__active button--flex me-2':'qualification__button button--flex me-2'}>
              <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>
            <div onClick={()=>toggleTab(2)}  className={toggleState===2?'qualification__button qualification__active button--flex':'qualification__button button--flex'}>
              <i className="uil uil-briefcase-alt qualification__icon"></i>Grade
              
            </div>
            <br></br>
            <br></br>
          </div>
          <div className="qualification__sections">
            <div onClick={()=>toggleTab(1)} className={toggleState===1?'qualification__content qualification__content-active':'qualification__content'}>
            <div className="qualification__data">
                <div>
                  <h5 className="qualification__title">Masters in Science</h5>
                    <span className="qualification__subtitle">Northwest Missouri State University </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt">
                        2022-2023
                        </i>
                      </div>
                  </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h5 className="qualification__title">Bachelors in Technology</h5>
                    <span className="qualification__subtitle"> Mahatma Gandhi Institute of Technology </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt">
                        2018-2022
                        </i>
                      </div>
                </div>
                
                </div>
                <div className="qualification__data">
                <div>
                  <h5 className="qualification__title">12th grade</h5>
                    <span className="qualification__subtitle">Bhavans Sri RamaKrishna Vidyalaya</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt">
                        2017-2018
                        </i>
                      </div>
                  </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h5 className="qualification__title">10th grade</h5>
                    <span className="qualification__subtitle">Cal Public School</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-calendar-alt">
                        2015-2016
                        </i>
                      </div>
                  </div>
                
              </div>
              
            </div>
            <div onClick={()=>toggleTab(2)} className={toggleState===2?'qualification__content qualification__content-active':'qualification__content'}>
            <div className="qualification__data">
                <div style={{marginLeft:'220px'}}>
                  <h5 className="qualification__title">Masters</h5>
                    <span className="qualification__subtitle">Aggregate</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-briefcase">
                        3.9/4.0
                        </i>
                      </div>
                  </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h5 className="qualification__title">BTech</h5>
                    <span className="qualification__subtitle"> Aggregate </span>
                      <div className="qualification__calendar">
                        <i className="uil uil-briefcase">
                        7.44/10.00
                        </i>
                      </div>
                </div>
                
                </div>
                <div className="qualification__data">
                <div style={{marginLeft:'200px'}}>
                  <h5 className="qualification__title">12th grade</h5>
                    <span className="qualification__subtitle">Aggregate</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-briefcase">
                         8.7/10.0
                        </i>
                      </div>
                  </div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
              </div>
              <div className="qualification__data">
                <div></div>
                <div>
                  <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
                </div>
                <div>
                  <h5 className="qualification__title">10th grade</h5>
                    <span className="qualification__subtitle">Aggregate</span>
                      <div className="qualification__calendar">
                        <i className="uil uil-briefcase">
                          9.4/10.0   </i>
                      </div>
                  </div>
                
              </div>
              
            </div>
          </div>
        </div>
        </section>
        </div>
    )
}