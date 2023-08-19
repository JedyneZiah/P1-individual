import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';



const Work = () => {
  return (
   
    <CardGroup>
    <Card style={{margin: "20px", borderRadius: "20px"}}>
      <Card.Img variant="top" src="PHstudios.jpg" style={{borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title>PH Studio</Card.Title>
        <Card.Text>
        Our skilled team of photographers is dedicated to transforming fleeting instants into timeless memories. With an artful blend of creativity and technology.
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{margin: "20px", borderRadius: "20px"}}>
      <Card.Img variant="top" src="flapp.png" style={{borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title>Flapp</Card.Title>
        <Card.Text>
        Flapp is a digital platform that enables users to exchange text, multimedia, and sometimes voice messages in real-time. It serves as a convenient and efficient way for individuals in University of Pangasinan to communicate, with memo and announcements.
        </Card.Text>
      </Card.Body>
      
    </Card>
    <Card style={{margin: "20px", borderRadius: "20px"}}>
      <Card.Img variant="top" src="cite.jpg" style={{borderRadius:"20px"}}/>
      <Card.Body>
        <Card.Title>UPCITE</Card.Title>
        <Card.Text>
        UPCITE is a curated collection of galleries showcasing various events. It offers a visual journey through multimedia, capturing the essence of CITE Department.
        </Card.Text>
      </Card.Body>
      
    </Card>
  </CardGroup>
  );
};

export default Work;
