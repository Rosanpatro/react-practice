//use of Memoization in React
import React from 'react';

const Child = (props) => {
  console.log('Inside the Child Component');

  return(
    <div>
    The count is {props.val}
    </div>
  )
}
export default Child;