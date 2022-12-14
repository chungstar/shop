import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Nav } from 'react-bootstrap'
import { addItem } from "./../store.js"
import { useDispatch } from "react-redux";

function Detail(props){
  
  let [fade2, setFade2] = useState('')
  let [alert, setAlert]=useState(true)
  let {id} = useParams();
  let [탭,탭변경] = useState(0)
  let item = props.shoes.find(function(x){
      return x.id == id
    });
  let dispatch = useDispatch()
  
  useEffect(()=>{
    let 꺼낸거 = localStorage.getItem('watched')
    꺼낸거 = JSON.parse(꺼낸거)
    console.log(item.id)
    console.log(꺼낸거)
    꺼낸거.push(item.id)
    
    //Set으로 바꿨다가 다시 array로 만들기
    꺼낸거 = new Set(꺼낸거)
    꺼낸거 = Array.from(꺼낸거)
    localStorage.setItem('watched', JSON.stringify(꺼낸거))
  }, [])

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) },2000)

    return ()=>{
      clearTimeout(a)
    }
    },[])
  
  useEffect(()=>{
    setFade2('end')
    return ()=>{
      setFade2('')
    }
  },[])
  
    return (
      <div className={"container start "+ fade2}>
        
        { alert == true
        ? <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
        : null }
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}원</p>
            <button className="btn btn-danger" onClick={()=>{
              dispatch(addItem( {id : 1, name : 'what the', count : 2} ))
            }}>주문하기</button> 
          </div>
        </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent 탭={탭}/>
    </div>  
    )
  }
  function TabContent({탭}){

    let[fade,setFade] = useState('') 

    useEffect(()=>{
      let a = setTimeout(()=>{setFade('end')},100)

      return ()=>{
        clearTimeout(a)
        setFade('')
      }
    },[탭])

    return (<div className={'start '+fade}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
      </div>)
  }

  export default Detail;