import { Link } from "react-router-dom"
import Logo from '../images/logo.png'
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const Footers = () => {
  return (
<footer className="footers">
  <div className="container footer__container">
    <article>
      <Link to="/" className="logo">
        <img src={Logo} alt="Footer Logo"></img>
      </Link>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam enim eum iste voluptas 
        omnis maiores, reprehenderit illum quo. Incidunt exercitationem similique recusandae illo cum.</p>
        <div className="footer__socials">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          <a href="https://facebook.com/" target="_blank" rel="noreferrer"><FaFacebook/></a>
          <a href="https://instagram.com/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer"><AiOutlineTwitter/></a>

        </div>
    </article>
    <article>
      <h3>Permalinks</h3>
      <Link to="/about">About</Link>
      <Link to="/plans">Plans</Link>
      <Link to="/gallery">Gallery</Link>
      <Link to="/trainers">Trainers</Link>
      <Link to="/contact">Contact</Link>

    </article>
    <article>
      <h3>Insights</h3>
      <Link to="/about">Blog</Link>
      <Link to="/plans">Case Studies</Link>
      <Link to="/gallery">Events</Link>
      <Link to="/trainers">Communities</Link>
      <Link to="/contact">FAQs</Link>

    </article>
    <article>
      <h3>Get In Touch</h3>
      <Link to="/support">Support</Link>
      <Link to="/contact">Contact us</Link>

    </article>
  </div>
  <div className="footer__copyright">
    <small>2023 Ansari Muneeza Practice code &copy; All Right Reserved</small>
  </div>
</footer>
    )
}

export default Footers