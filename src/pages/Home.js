import React from 'react';

import SocialLinks from '../components/SocialLinks';
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { Button, Image, Row, Col} from 'react-bootstrap';
import { Link } from "react-router-dom";



const Home = () => {
  const [text] = useTypewriter({
    words: ['Researcher','Developer' ],
    loop:{},
});

  return (
    <div className='container d-flex justify-content-center align-items-center'>
      
      <Row className='hero gap-5'>
      
        <Col>
          <h1 className='display-1 fw-bold' style={{color: "white"}}>Jedyne Ziah B. Claveria</h1>
          <h3 style={{color: "white"}}>i'm a 
            <span> {text}</span>
            <Cursor/>
          </h3>
          <hr/>  
          <p style={{color: "white", fontsize: "20px"}}>
          I'm a web developer and researcher, passionate about creating innovative online experiences
          </p>
          <div className='d-flex align-items-center gap-2'> 
            <Link to='/work'>
              <Button className='btn-lg' color='#4e47d6'>View My Work</Button>
            </Link>
            
            <SocialLinks />
          </div>
          
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <Image src="/profile.png" width={600} height={600} alt="profile" className="rounded-lg"/>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
