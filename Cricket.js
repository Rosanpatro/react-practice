//using of crud operation
import React,{ Component} from 'react';

class Cricket extends Component {

  constructor() {
    this.state = {
      team_name: "",
      team_flag: "",
      total_match: "",
      win_match: "",
      team_nrr: "",
      team_points: "",
      teamlist: []
    }
  }

  addTeam = () => {
    let newArr = this.state.teamlist;
    newArr.push({
      name: this.state.team_name,
      flag: this.state.team_flag,
      match: this.state.total_match,
      winning: this.state.win_match,
      nrr: this.state.team_nrr,
      points: this.state.team_points
    })
    this.setState({
      teamlist: newArr,
      team_name: "",
      team_flag: "",
      total_match: "",
      win_match: "",
      team_nrr: "",
      team_points: ""
    })
  }

  delTeam = (i) =>{
    alert("Delete Team")
    let teams = this.state.teamlist; teams.splice(i,1);
    //console.log(i,teams)
    this.setState({
      teamlist: teams
    })
  }

  render() {
    return(
      <div>
      <p>
      Team Name: <input onChange={(evt) => this.setState({team_name: evt.target.value})} value={this.state.team_name} />
      </p>
      <p>
      National Flag: <input onChange={(evt) => this.setState({team_flag: evt.target.value})} value={this.state.team_flag} />
      </p>
      <p>
      Total Match: <input onChange={(evt) => this.setState({total_match: evt.target.value})} value={this.state.total_match} />
      </p>
      <p>
      Winning Match: <input onChange={(evt)=>this.setState({win_match: evt.target.value})} value={this.state.win_match} />
      </p>
      <p>
      Net Run Rate: <input onChange={(evt) => this.setState({team_nrr: evt.target.value})} value={this.state.team_nrr} />
      </p>
      <p>
      Points: <input onChange={(evt) => this.setState({team_points: evt.target.value})} value={this.state.team_points} />
      </p>
      <p>
      <button onClick={this.addTeam} >Add Team</button>
      </p>
      <hr/>
      <table>
      <th>Team Name</th><th>National Flag</th><th>Total Match</th><th>Winning Match</th><th>Net Run Rate</th><th>Points</th><th>Action</th>
      {
        this.state.teamlist.map((ckt,i) => {
          return(
            <tr>
            <td>{ckt.name}</td>
            <td><img src={ckt.flag} height='100' width='200'/></td>
            <td>{ckt.match}</td>
            <td>{ckt.winning}</td>
            <td>{ckt.nrr}</td>
            <td>{ckt.points}</td>
            <td><button onClick={() =>this.delTeam(i)} >Delete</button></td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Cricket;

//TEAM FLAG LINKS
//Australia:'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg'
//India:'https://www.mapsofindia.com/maps/india/india-flag-1024x600.jpg'
//England:'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png'
//NewZealand:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2000px-Flag_of_New_Zealand.svg.png'
//Pakistan:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2000px-Flag_of_Pakistan.svg.png'
//Bangladesh:'https://europa.eu/capacity4dev/system/files/images/photo/bangladesh.gif'
//SriLanka:'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg'
//SouthAfrica:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2000px-Flag_of_South_Africa.svg.png'
//WestIndies:'https://i.pinimg.com/originals/97/fc/69/97fc695ba919e5dfb718ec87066286bc.png'
//Afganistan:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/2000px-Flag_of_Afghanistan.svg.png'