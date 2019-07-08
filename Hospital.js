import React,{Component} from 'react';

class Hospital extends Component{

  constructor(){
    this.state = {
      hospital_name: 'Appolo',
      rank: 3,
      doctors: [
        {name:"Mr Mohan", age:21, dept:'Neuro'},
        {name:"Mr Sohan", age:22, dept:'Ortho'},
        {name:"Mr Rohan", age:23, dept:'Psyco'}
      ]
    }    
  }

  render(){
    return(
      <div>
      Hospital Name: {this.state.hospital_name}<br/>
      Rank: {this.state.rank}
      <hr/>
      <table>
      <th>Name</th><th>Age</th><th>Department</th>
      {
        this.state.doctors.map((doc) => {
          return(
            <tr>
            <td>{doc.name}</td>
            <td>{doc.age}</td>
            <td>{doc.dept}</td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Hospital;