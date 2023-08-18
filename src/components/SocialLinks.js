import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav';

const SocialLinks = ()=> {
  return(
    <div className="d-flex gap-2 p-2 fs-3" style={{color:"#fff"}}>
      <Nav.Link href="https://github.com/">
        <FaGithub />
      </Nav.Link>
      <Nav.Link href="https://www.facebook.com/">
        <FaFacebook />
      </Nav.Link>
      <Nav.Link href="https://instagram.com/">
        <FaInstagram />
      </Nav.Link>
    </div>
  );
};

export default SocialLinks;