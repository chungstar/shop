import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import './App.css';
import bg from './img/bg.png';
import data from './data.js'

function App() {

  let [shoes] = useState(data)

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">GyuShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}></div>

      <Row>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%"/>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].content}</p>
        </Col>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].content}</p>
        </Col>
        <Col sm>
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%"/>
              <h4>{shoes[2].title}</h4>
              <p>{shoes[2].content}</p>
        </Col>
      </Row>
    </div>
  );
}

export default App;
