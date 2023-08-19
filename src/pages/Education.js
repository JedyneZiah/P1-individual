import React from 'react';
import {Accordion, Container} from 'react-bootstrap';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';


const Education = () => {
  return (
    <Container style={{color: "white"}}>
      <h2 className='display-1 fw-bold text-center'>My Education</h2>
      <p className='text-center'>These are my academic qualifications:</p>
      <hr/>
      <Container className='p-5'>
      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>2008-2010</Accordion.Header>
        <Accordion.Body>
        Malued Elem School
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>2010-2011</Accordion.Header>
        <Accordion.Body>
        Tandang Sora Elem School (Quezon City)
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>2011-2012</Accordion.Header>
        <Accordion.Body>
        Tayug West Central Elem School
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>2012-2015</Accordion.Header>
        <Accordion.Body>
        Juan L Siapno Elem School
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>2015-2017</Accordion.Header>
        <Accordion.Body>
        Dagupan City National High School
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>2017-2018</Accordion.Header>
        <Accordion.Body>
        Samal Nationa High School
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>2018-2019 </Accordion.Header>
        <Accordion.Body>
        Dagupan City National High School
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>2019-Present </Accordion.Header>
        <Accordion.Body>
        PHINMA: University of Pangasinan
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
    
      </Container>
    </Container>
  );
};

export default Education;
