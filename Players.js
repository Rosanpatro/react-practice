//using of hooks like useReducer in functional component
import React,{useReducer} from 'react';

let iniState={
  //pl_name : "",
  runs : 0
}

let reducer = (state,action) =>{
  switch(action.run){
    case 'ONE_RUN':
    return{
      //pl_name : "",
      runs : state.runs+1
    }
    case 'FOUR_RUN':
    return{
      //pl_name : "",
      runs : state.runs+4
    }
    case 'SIX_RUN':
    return{
      //pl_name : "",
      runs : state.runs+6
    }
    case 'Wide':
    return{
      //pl_name: "",
      runs : state.runs+action.val
    }
  }
}
const Players = () =>{
  const[state,dispatch] = useReducer(reducer,iniState);
  return(
    <div>
    
    The Run is :{state.runs}<br/>
    <button  onClick={() => dispatch({run:'ONE_RUN'})}>1 Run</button> | 
    <button  onClick={() => dispatch({run:'FOUR_RUN'})}>4 Run</button> | 
    <button  onClick={() => dispatch({run:'SIX_RUN'})}>6 Run</button> |
    <button  onClick={() => dispatch({run:'Wide',val:1})}>Wide</button>
    </div>
  )
}
export default Players;
//Player Name : <input onChange={(evt)=>dispatch(evt.target.value)} /> <br/>