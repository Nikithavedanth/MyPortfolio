import './skills.css';
import { FrontEnd } from './frontend';
import { BackEnd } from './backend';
import { DbDeploy } from './db&deploy';
// import { ScrollDown } from './scrolldown';
export function Skills(){
    return(
        <div>
            <section className="skills section" id="skills" style={{display: 'grid',
      placeItems: 'center'}}>
                <h2 className="section__title" style={{textAlign:'center'}} >Skills</h2>
                <span className="section__subtitle">My technical level</span>
                <br></br>
                <br></br>
                <div className="skills__container container grid">
                    <FrontEnd/>
                    <BackEnd/>
                    <DbDeploy/>
                </div>
                
            </section>
            {/* <ScrollDown/> */}
          </div>
    )
}