//using of axios and useState,useEffect in functional Component
import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Posts = ()=>{

  let[posts,setPosts] = useState([]);
  
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      console.log('The response is',res.data);
      setPosts(res.data);
    })
    .catch((err)=>{
      console.log('The error is',err);
    })
  },[])

  return(
    <div>
    <h2>List of Posts</h2>
    <table>
    <th>Title</th><th>Body</th>
    {
      posts.map((post,i) =>{
        return(
          <tr key={i}>
          <td>{post.title}</td>
          <td>{post.body}</td>
          </tr>
        )
      })
    }
    </table>
    </div>
  )
}
export default Posts;