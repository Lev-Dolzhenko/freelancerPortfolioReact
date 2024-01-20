import vk from '../../content/icons/vk.svg'
import instagram from '../../content/icons/instagram.svg'
import twitter from '../../content/icons/twitter.svg'
import gitHub from '../../content/icons/gitHub.svg'
import In from '../../content/icons/linkedin.svg'

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub} alt="Link" /></a></li>
                    <li className="social__item"><a href="#!"><img src={In} alt="Link" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    );
}
 
export default Footer;