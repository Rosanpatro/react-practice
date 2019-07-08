import React,{ Component} from 'react';

class Cricket extends Component {

  constructor() {
    this.state = {
      icc:[
        {
          team_name: 'Australia',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_%28converted%29.svg',
          match: 8,
          winning_match: [{
            no_of_match: 7,
            against_team: ['Afganistan', 'West Indies', 'Pakistan', 'Sri Lanka', 'Bangladesh', 'England', 'New Zealand']
          }],
          losing_match: [{
            no_of_match: 1,
            against_team: ['India']
          }],
          nrr: '+1.006',
          points: 14
        },
        {
          team_name: 'India',
          flag: 'https://www.mapsofindia.com/maps/india/india-flag-1024x600.jpg',
          match: 6,
          winning_match: [{
            no_of_match: 5,
            against_team: ['South Africa', 'Australia', 'Pakistan', 'Afganistan',  'West Indies']
          }],
          losing_match: [{
            no_of_match: 0,
            against_team: ['NA']
          }],
          nrr: '+1.160',
          points: 11
        },
        {
          team_name: 'New Zealand',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2000px-Flag_of_New_Zealand.svg.png',
          match: 8,
          winning_match: [{
            no_of_match: 5,
            against_team: ['Sri Lanka', 'Bangladesh', 'Afganistan', 'South Africa', 'West Indies']
          }],
          losing_match: [{
            no_of_match: 2,
            against_team: ['Pakistan', 'Australia']
          }],
          nrr: '+0.508',
          points: 11
        },
        {
          team_name: 'England',
          flag: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png',
          match: 7,
          winning_match: [{
            no_of_match: 4,
            against_team: ['South Africa', 'Bangladesh', 'West Indies', 'Afganistan']
          }],
          losing_match: [{
            no_of_match: 3,
            against_team: ['Pakistan', 'Sri Lanka', 'New Zealand']
          }],
          nrr: '+1.051',
          points: 8
        },
        {
          team_name: 'Bangladesh',
          flag: 'https://europa.eu/capacity4dev/system/files/images/photo/bangladesh.gif',
          match: 7,
          winning_match: [{
            no_of_match: 3,
            against_team: ['South Africa', 'West Indies', 'Afganistan']
          }],
          losing_match: [{
            no_of_match: 3,
            against_team: ['New Zealand', 'England', 'Australia']
          }],
          nrr: '-0.133',
          points: 7
        },
        {
          team_name: 'Pakistan',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Pakistan.svg/2000px-Flag_of_Pakistan.svg.png',
          match: 8,
          winning_match: [{
            no_of_match: 4,
            against_team: ['England', 'South Africa', 'New Zealand', 'Afganistan']
          }],
          losing_match: [{
            no_of_match: 3,
            against_team: ['West Indies', 'Australia', 'India']
          }],
          nrr: '-0.876',
          points: 9
        },
        {
          team_name: 'Sri Lanka',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg',
          match: 6,
          winning_match: [{
            no_of_match: 2,
            against_team: ['Afganistan', 'England']
          }],
          losing_match: [{
            no_of_match: 2,
            against_team: ['New Zealand', 'Australia']
          }],
          nrr: '-1.119',
          points: 6
        },
        {
          team_name: 'West Indies',
          flag: 'https://i.pinimg.com/originals/97/fc/69/97fc695ba919e5dfb718ec87066286bc.png',
          match: 7,
          winning_match: [{
            no_of_match: 1,
            against_team: ['Pakistan']
          }],
          losing_match: [{
            no_of_match: 5,
            against_team: ['Sri Lanka', 'Bangladesh', 'Afganistan', 'South Africa']
          }],
          nrr: '-0.320',
          points: 3
        },
        {
          team_name: 'South Africa',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/2000px-Flag_of_South_Africa.svg.png',
          match: 7,
          winning_match: [{
            no_of_match: 1,
            against_team: ['Afganistan']
          }],
          losing_match: [{
            no_of_match: 5,
            against_team: ['England', 'Bangladesh', 'India', 'New Zealand', 'Pakistan']
          }],
          nrr: '-0.324',
          points: 3
        },
        {
          team_name: 'Afganistan',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/2000px-Flag_of_Afghanistan.svg.png',
          match: 8,
          winning_match: [{
            no_of_match: 0,
            against_team: ['NA']
          }],
          losing_match: [{
            no_of_match: 8,
            against_team: ['Australia', 'Sri Lanka', 'New Zealand',  'South Africa', 'England', 'India', 'Bangladesh', 'Pakistan']
          }],
          nrr: '-1.834',
          points: 0
        }
      ]
    }
  }

  render() {
    return(
      <div>
      <table>
      <th>Team Name</th><th>National Flag</th><th>Match</th><th>Winning Match</th><th>Losing Match</th><th>Net Run Rate</th><th>Points</th>
      {
        this.state.icc.map((ckt) => {
          return(
            <tr>
            <td>{ckt.team_name}</td>
            <td><img src={ckt.flag} height='100' width='200'/></td>
            <td>{ckt.match}</td>
            <td>
            <ul>
            {
              ckt.winning_match.map((win) => {
                return(
                  <li><li><b>Numbers:</b> {win.no_of_match}</li><br/>
                  <li><b>Against:</b> {win.against_team}</li></li>
                )
              })
            }
            </ul>
            </td>
            <td>
            <ul>
            {
              ckt.losing_match.map((lose) => {
                return(
                  <li><li><b>Numbers:</b> {lose.no_of_match}</li><br/>
                  <li><b>Against:</b> {lose.against_team}</li></li>
                )
              })
            }
            </ul>
            </td>
            <td>{ckt.nrr}</td>
            <td>{ckt.points}</td>
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