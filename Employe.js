import React from 'react';

const Employe = (props) => {

  return(
    <div>
    <p>Employee Name:<input onChange={(evt)=>props.ename(evt.target.value)}/></p>
    <p>
    Employee Age:<input onChange={(evt)=>props.eage(evt.target.value)}/>
    </p>
    <p>
    Employee Company:<input onChange={(evt)=>props.ecomp(evt.target.value)}/>
    </p>
    <p>
    Employee Salary:<input onChange={(evt)=>props.esal(evt.target.value)}/>
    </p>
    <hr/>
    {props.emname} is {props.emage} years old. He/She is working at {props.emcomp} company and his/her salary is {props.emsal}.
    </div>
  )
}

export default Employe;