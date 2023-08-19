import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3" style={{color:"#fff"}}>
      <Nav.Link href="https://github.com/JedyneZiah">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/gdeyn">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://www.instagram.com/primmzbc/?fbclid=IwAR0GVlgjw6RbnBDWP0WpBAdZ8kV5gQcgcsRjjZ_HV88S_5QgXRYdOHYxufk">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;