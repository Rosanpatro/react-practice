import React,{useState} from 'react';

const Employe = (props) => {

  const[emp_name,setEmpName]=useState("");
  const[emp_age,setEmpAge]=useState("");
  const[emp_pic,setEmpImage]=useState("");
  const[emp_company,setEmpCompany]=useState("");
  const[emp_sal,setEmpSalary]=useState("");

  return(
    <div>
    <p>Employee Name:<input value={props.ename} onChange={(evt)=>setEmpName(evt.target.value)}/></p>
    <p>
    Employee Age:<input value={props.eage} onChange={(evt)=>setEmpAge(evt.target.value)}/>
    </p>
    <img src={props.epic} width="100" height="100" />
    <p>
    Employee Company:<input value={props.ecomp} onChange={(evt)=>setEmpCompany(evt.target.value)}/>
    </p>
    <p>
    Employee Salary:<input value={props.esal} onChange={(evt)=>setEmpSalary(evt.target.value)}/>
    </p>
    </div>
  )
}

export default Employe;