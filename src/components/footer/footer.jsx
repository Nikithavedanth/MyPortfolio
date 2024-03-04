import './footer.css';
export function Footer(){
    return(
        <div>
            <footer className="footer"id="footer">
                <div className="footer__container container">
                    <h1 className="footer__title">Nikitha Vedant Madabhushi</h1>
                    <ul className="footer__list">
                        <li>
                            <a href="#about" className="footer__link">About me</a>
                        </li>
                        <li>
                            <a href="#internships" className="footer__link">Internships</a>
                        </li>
                        <li>
                            <a href="#projects" className="footer__link">Projects</a>
                        </li>
                    </ul>
                    <div className="footer__social">
                        <a href="https://github.com/Nikithavedanth" className="footer__social-link" target="_blank">
                        <i className="bx bxl-github"></i>
                        </a>
                        <a href="https://web.telegram.org/k/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-telegram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nikitha-vedant-madabhushi-0643b1182/" className="footer__social-link" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                        </a>
                    </div>
                    <span className="footer__copy">&#169; Web Developer. All rights reserved...</span>
                </div>
            </footer>
        </div>
    )
}