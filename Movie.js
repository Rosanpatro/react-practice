import React,{ Component} from 'react';

class Movie extends Component{
  constructor(){
    super();
    this.state={
      movie_name: "",
      movie_release_year: "",
      movie_budget: "",
      movie_pic: "",
      movielist: []
    }
  }

  addMovie = ()=>{
    let newArray = this.state.movielist;
    newArray.push({
      name : this.state.movie_name,
      release : this.state.movie_release_year,
      budget : this.state.movie_budget,
      pic : this.state.movie_pic
    })
    this.setState({
      movielist : newArray,
      movie_name: "",
      movie_release_year: "",
      movie_budget: "",
      movie_pic: ""
    })
  }

  delMovie = (i) =>{
    alert("Delete Data")
    let movies= this.state.movielist.splice; movies.splice(i,1);
    this.setState({
      movielist : movies
    })
  }

  render(){
    return(
      <div>
      <p>
      Movie Name: <input onChange={(evt)=>this.setState({movie_name : evt.target.value})} value={this.state.movie_name} />
      </p>
      <p>
      Movie Release Year: <input onChange={(evt)=>this.setState({movie_release_year : evt.target.value})} value={this.state.movie_release_year} />
      </p>
      <p>
      Movie Budget: <input onChange={(evt)=>this.setState({movie_budget : evt.target.value})} value={this.state.movie_budget} />
      </p>
      <p>
      Movie Image: <input onChange={(evt)=>this.setState({movie_pic : evt.target.value})} value={this.state.movie_pic} />
      </p>
      <p>
      <button onClick={this.addMovie}>Add Movie</button>
      </p>
      <hr/>
      <table>
      <th>Movie Name</th><th>Movie Release Year</th><th>Movie Budget</th><th>Movie Image</th><th>Action</th>
      {
        this.state.movielist.map((movie,i)=>{
          return(
            <tr>
            <td align="center" >{movie.name}</td>
            <td align="center" >{movie.release}</td>
            <td align="center" >{movie.budget}</td>
            <td align="center" ><img src={movie.pic} width="100" height="100" /></td>
            <td align="center" ><button onClick={ ()=> this.delMovie(i)}>Delete</button></td>
            </tr>
          )
        })
      }
      </table>
      </div>
    )
  }
}
export default Movie;