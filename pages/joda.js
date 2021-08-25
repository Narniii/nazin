import { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import rootReducer from '../reduxTest/reducers/rootReducer'
import * as actions from '../reduxTest/actions/counterActions'

const Joda = () => {
    
    // useSelector reducers
    const count = useSelector(state => state.counter)
    console.log(count)
    
    // dispatch calling
    const dispatch = useDispatch();
    return ( 
        <>
            <div style={{width:"auto" , height:"200px" , display:"flex" ,padding:"50px" ,  justifyContent:"space-evenly" , marginTop:"50px", borderBottom:"solid orange 1px"}}>
                <button style={{width:"auto" , height:"40px"}} onClick={() => console.log('basket')}>basket</button>
                <button style={{width:"auto" , height:"40px"}} onClick={() => console.log("actionTypes")}>action</button>
                <button style={{width:"auto" , height:"40px"}} onClick={() => console.log("reducerrrr")}>reducer</button>
                <button style={{width:"auto" , height:"40px"}} onClick={() => console.log("ah")}>ah</button>
            </div>

            <div style={{width:"auto" , height:"200px" , display:"flex" ,padding:"50px",flexDirection:"column" ,  justifyContent:"space-evenly" , marginTop:"50px", borderBottom:"solid orange 1px"}}>
                <p>number: {count.value}</p>
                <button style={{width:"40px" , height:"40px"}} onClick={() => dispatch(actions.incrementCounter())}>+</button>
                <br />
                <button style={{width:"40px" , height:"40px"}}onClick={() => dispatch(actions.decrementCounter())}>-</button>
            </div>
        
        
        </>
     );
}
 
export default Joda;