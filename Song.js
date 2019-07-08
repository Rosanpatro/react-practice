import React,{ Component} from 'react';

class Song extends Component{
  constructor(){
    this.state = {
      songs:[ {
        song_name: 'Yarri',
        release_year: 2019,
        singer_name: 'Nikk',
        song_type: 'Album',
        language: 'Punjabi'
      },
      {
        song_name: 'Bekhayali',
        release_year: 2019,
        singer_name: 'Arjit Singh',
        song_type: 'Movie',
        language: 'Hindi'
      },
      {
        song_name: 'Aaj ki party',
        release_year: 2013,
        singer_name: 'Mika Singh',
        song_type: 'Movie',
        language: 'Hindi'
      },
      {
        song_name: 'Seeti Maar',
        release_year: 2017,
        singer_name: 'Jaspreet Jasz',
        song_type: 'Movie',
        language: 'Telugu'
      },
      {
        song_name: 'Rowdy Baby',
        release_year: 2018,
        singer_name: 'Dhanush',
        song_type: 'Movie',
        language: 'Tamil'
      }
    ]
    }
  }

  render() {
    return(
      <div>
      <table>
      <th>Song Name</th><th>Release Year</th><th>Singer Name</th><th>Song Type</th><th>Language</th>
      {
        this.state.songs.map((sng) => {
          return(
            <tr>
            <td>{sng.song_name}</td>
            <td>{sng.release_year}</td>
            <td>{sng.singer_name}</td>
            <td>{sng.song_type}</td>
            <td>{sng.language}</td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Song;