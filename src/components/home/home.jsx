import React from "react";
import './home.css';
import { Social} from "./social";
import { Data } from "./data";
import { ScrollDown } from "./scrolldown";
// import { Data } from "./data";
const Home=()=>{
    return(
        <div>
            <section className="home section" id='home'>
                <div className="home__container container grid">
                    <div className="home__content d-flex justify-content-center ms-2 grid" style={{marginTop:"150px "}}>
                        <Social/>
                        
                        <div className="home__img"> </div>
                        <Data/>
                        
                    </div>
                    
                    <ScrollDown/>
                </div>
            
            </section>
        </div>
    )
}
export default Home;