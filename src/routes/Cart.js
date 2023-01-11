import {Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeName, increase } from './../store/userSlice.js'

function Cart(){

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()
    return(
        <div>
            {state.user.name}{state.user.age}의 장바구니
            <button onClick={()=>{dispatch(increase(10))}}>버튼~</button>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
                </tr>
            </thead>
            {
                state.cart.map((a, i)=>
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{state.cart[i].name}</td>
                    <td>{state.cart[i].count}</td>
                    <td>
                        <button onClick={()=>{
                            dispatch(changeName())
                        }}>+</button>
                    </td>
                </tr>
                )
            }
            </Table> 
        </div>
    )
}

export default Cart