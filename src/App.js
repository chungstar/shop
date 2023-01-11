import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { createContext, useState } from 'react';
import './App.css';
import bg from './img/bg.png';
import data from './data.js'
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'

function App() {

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10,11,12])

  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">GyuShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={
        <>
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
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((i)=>{
              console.log(i.data)
              let copy = [...shoes, ...i.data];
              setShoes(copy);
            })
          }}>더보기</button>
        </>
        }/>
        <Route path="/detail/:id" element={
            <Detail shoes={shoes}/> 
        } />
        <Route path="/cart" element={
          <Cart/>
        } />
        <Route path="/about" element={ <About/> }>
          <Route path="member" element={ <div>멤버</div> } />
          <Route path="location" element={ <div>위치정보</div> } />
        </Route>
        <Route path="/event" element={ <EventPage/> }>
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰 받기</div> } />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>

      
    </div>
  );
}
function About(){
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}
function EventPage(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
} 

function Card(props){
  return (
    <Col sm>
      <img src={"https://codingapple1.github.io/shop/shoes"+ props.i +".jpg"} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col>
  )
}
export default App;
