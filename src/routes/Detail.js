import { useParams } from "react-router-dom"
import styled from "styled-components";

let YellowBtn = styled.button`
  background : ${ props=>props.bg };
  color : balck;
  padding : 10px;
`


function Detail(props){

    let {id} = useParams();
    let item = props.shoes.find(function(x){
        return x.id == id
      });
    
      return (
        <div className="container">
          <YellowBtn bg="blue" >버튼</YellowBtn>
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
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