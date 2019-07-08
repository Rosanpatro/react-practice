import React,{Component} from 'react';

const Prodt = (props) => {
  const style = {
    width: '200px',
    height: '200px',
    padding : '10px',
    margin: '10px',
    border: '1px solid black'
  }
  return(
    <div style={style}>
    <h3>{props.pname}</h3>
    <p>
    Rs. {props.pcost}
    </p>
    <img src={props.ppic} width="150" height="100" />
    </div>
  )
}

export default Prodt;