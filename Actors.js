import React,{Component} from 'react';

class Actors extends Component{

  constructor(){
    this.state = {
      actors:[
      {
        actor_name: 'Shahrukh Khan',
        actor_age: 53,
        actor_height: '1.8 meter',
        actor_weight: 70,
        actor_film: [
          {name : 'Kal ho na ho', release: 2004, pic: 'https://i.ytimg.com/vi/tVMAQAsjsOU/maxresdefault.jpg'},
          {name : 'Kuch kuch hota hai', release: 1997, pic: 'https://images-na.ssl-images-amazon.com/images/I/91zr1v5eM9L._RI_.jpg'},
          {name : 'My name is khan', release: 2010, pic: 'https://img.huffingtonpost.com/asset/5a13813d1800001a00f6d398.jpeg?ops=scalefit_720_noupscale'}
        ]
      },
      {
        actor_name: 'Salman Khan',
        actor_age: 53,
        actor_height: '1.8 meter',
        actor_weight: 70,
        actor_film: [
          {name : 'Wanted', release: 2010, pic: 'https://images.shazam.com/coverart/t50028256-b1131932804_s400.jpg'},
          {name : 'Ready', release: 2009, pic: 'https://i.bollywoodmantra.com/albums/wallpapers/ready/salman-khan___315077.jpg'},
          {name : 'Bajrangi Bhaijaan', release: 2013, pic: 'https://i.ytimg.com/vi/VXzUue3v20k/maxresdefault.jpg'}
        ]
      },
      {
        actor_name: 'Hrithik Roshan',
        actor_age: 44,
        actor_height: '2 meter',
        actor_weight: 75,
        actor_film: [
          {name : 'Koi Mil Gaya', release: 2004, pic: 'https://i.ytimg.com/vi/ISrwaw_eK8E/hqdefault.jpg'},
          {name : 'Krissh', release: 2007, pic: 'https://mail.coolmusicz.net/download/load/Hindi_Mp3_Songs/Hindi_A_to_Z_All_Movies_Mp3_Songs/K_Hindi_Movies_Mp3_Songs/Krissh_2006/folder.jpg'},
          {name : 'Dhoom 2', release: 2006, pic: 'https://i.ytimg.com/vi/oRIIeyIa6nE/maxresdefault.jpg'}
        ]
      }
      ]
    }    
  }

  render(){
    return(
      <div>
      <table>
      <th>Name</th><th>Age</th><th>Height</th><th>Weight</th><th>Film</th>
      {
        this.state.actors.map((ac) => {
          return(
            <tr>
            <td>{ac.actor_name}</td>
            <td>{ac.actor_age}</td>
            <td>{ac.actor_height}</td>
            <td>{ac.actor_weight}</td>
            <td>
            <th>Name</th><th>Release Date</th><th>Picture</th>
            {
              ac.actor_film.map((fm) => {
                return(
                  <tr>
                  <td>{fm.name}</td>
                  <td>{fm.release}</td>
                  <td><img src={fm.pic} height='100' width='200'/></td>
                  </tr>
                )
              })
            }
            
            </td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Actors;
//return inside the return method of this.state.actors.map(())
//             <ul>{
//               ac.actor_film.map((film) => {
//                 return(
//                   <li>{film.name}<br/>
//                   <img src={film.pic} height='100' width='200'/>
//                   </li>
//                 )
//               })
//             }
//             </ul>