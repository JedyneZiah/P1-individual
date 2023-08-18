import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const NavbarComponent = ()=> {
  return(
    <Navbar expand="lg" className='px-5 py-4'>
      <Container>
        <Navbar.Brand href="#home" className='fw-semibold' style={{color: "#126bc9"}}>
        Jedyne
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to='/' className='text-decoration-none text-#126bc9'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/work' className='text-decoration-none text-#126bc9'>Work</Link></Nav.Link>
            <Nav.Link><Link to='/education' className='text-decoration-none text-#126bc9'>Education</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

  )
}
export default NavbarComponent;