import React,{useReducer} from 'react';

let iniState={
  count : 0
}

let reducer = (state,action) =>{
  switch(action.type){
    case 'INC':
    return{
      count : state.count+1
    }
    case 'DEC':
    return{
      count : state.count-1
    }
    case 'ADD':
    return{
      count : state.count+action.value
    }
  }
}
const Mystate = () =>{
  const[state,dispatch] = useReducer(reducer,iniState);
  return(
    <div>
    The count is : {state.count} <br/>
    <button  onClick={() => dispatch({type:'INC'})}>++</button> | 
    <button  onClick={() => dispatch({type:'DEC'})}>--</button> | 
    <button  onClick={() => dispatch({type:'ADD',value:5})}>Add 5</button>
    </div>
  )
}
export default Mystate;