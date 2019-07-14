import React,{Component} from 'react';
import Employe from './Employe';

class Employes extends Component{
  constructor(){
    this.state = {
      employees:[
        {
          emp_name:'Jeff Bezos',
          emp_age:56,
          emp_pic:'',
          emp_company:'Amazon',
          emp_sal:20000000
        },
        {
          emp_name:'Bill Gates',
          emp_age:67,
          emp_pic:'',
          emp_company:'Microsoft',
          emp_sal:15000000
        },
        {
          emp_name:'Marks Jukerberg',
          emp_age:35,
          emp_pic:'',
          emp_company:'Facebook',
          emp_sal:30000000
        }
      ]
    }
  }

  render(){ //instead of div tag we can use Fragment
    return(
      <React.Fragment> 
      <h3>List of Employees</h3>
      {
        this.state.employees.map((employ) =>{
          return(
            <Employe ename={employ.emp_name} eage={employ.emp_age} epic={employ.emp_pic} ecomp={employ.emp_company} esal={employ.emp_sal}/>
          )
        })
      }
      </React.Fragment>
    )
  }
}
export default Employes;