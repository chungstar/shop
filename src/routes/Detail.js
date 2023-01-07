import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


function Detail(props){
  
  let [count, setCount]=useState(0)
  let [alert, setAlert]=useState(true)
  let [num, setNum]=useState('')
  let {id} = useParams();
  let item = props.shoes.find(function(x){
      return x.id == id
    });

  useEffect(()=>{
    let a = setTimeout(()=>{ setAlert(false) },2000)
    
    return ()=>{
      clearTimeout(a)
    }
    },[])
    useEffect(()=>{
      if (isNaN(num) == true){
        alert('그러지마세요')
      }
    }, [num])
  
    return (
      <div className="container">
        
        { alert == true
        ? <div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>
        : null }
        {count}
        <button onClick={()=>{ setCount(count+1) }}>?</button>
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <input onChange={(e)=>{ setNum(e.target.value) }} />
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{item.title}</h4>
            <p>{item.content}</p>
            <p>{item.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
    </div>  
    )
  };
    
   
  export default Detail