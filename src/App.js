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
        {
          shoes.map((a, i)=>{
            return(
              <Card shoes={shoes[i]} i={i+1}/>
            )
          })
        }
      </Row>
    </div>
  );
}

function Card(props){
  return (
    <Col sm>
      <img src={"https://codingapple1.github.io/shop/shoes"+ props.i +".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </Col>
  )
}
export default App;
