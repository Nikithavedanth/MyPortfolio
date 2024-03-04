export function Info(){
    return(
        <div>
            <div className="about__info grid">
                <div className="about__box">
                <i className="bx bx-award about__icon"></i>
                    <h3 className="about__title">Top Skills</h3>
                    <span className="about__subtitle">Reactjs, Html, css, JavaScript</span>
                </div>
                <div className="about__box">
                <i className="bx bx-briefcase-alt about__icon"></i>
                    <h3 className="about__title">Projects</h3>
                    <span className="about__subtitle">7+ projects</span>
                </div>
                <div className="about__box">
                <i className="bx bx-support about__icon"></i>
                    <h3 className="about__title">Support</h3>
                    <span className="about__subtitle">24/7 online</span>
                </div>
            </div>
        </div>
    )
}