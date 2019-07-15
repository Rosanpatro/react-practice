import React,{useState} from 'react';
import Employe from './Employe';

const Employes = () => {

  const[emp_name,setEmpName]=useState("");
  const[emp_age,setEmpAge]=useState("");
  const[emp_company,setEmpCompany]=useState("");
  const[emp_salary,setEmpSalary]=useState("");

  return(
    <React.Fragment> 
    <h3>List of Employees</h3>
    {
      <Employe ename={setEmpName} eage={setEmpAge} ecomp={setEmpCompany} esal={setEmpSalary} emname={emp_name} emage={emp_age} emcomp={emp_company} emsal={emp_salary}/>
    }
    </React.Fragment>
  )
}
export default Employes;