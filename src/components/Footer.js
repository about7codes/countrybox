import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container-footer">
                <ul className="social-btns">
                <li className="social-btn">
                    <a href="https://twitter.com/sana_is_BB" target="_blank"><i className="fab fa-twitter" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://www.linkedin.com/in/sanaullah-hafiz-595a16b8" target="_blank"><i className="fab fa-linkedin-in" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://open.spotify.com/user/sandwich5656" target="_blank"><i className="fab fa-spotify" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://codepen.io/about7codes" target="_blank"><i className="fab fa-codepen" ></i></a>
                </li>
                <li className="social-btn">
                    <a href="https://github.com/about7codes" target="_blank"><i className="fab fa-github" ></i></a>
                </li>
                </ul>

                <div className="to-top">
                <a className="rocket" href="#intro">
                    <img src="/earth.png" alt="ico" /> <br />
                    <p id="trick">Beam me up, Scotty!</p>
                </a>
                </div>

                <p className="copyright">
                <i className="far fa-copyright" aria-hidden="true"></i> Sanaullah Hafiz {new Date().getFullYear()}
                </p>
            </div>
            </footer>
    )
}

export default Footer;
