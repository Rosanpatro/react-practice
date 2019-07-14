import React from 'react';
import axios from 'axios';

const Posts = ()=>{

  let[posts,setPosts] = useState([]);
  
  useEffect(()=>{
    axios.get("https").then((res)=>{
      console.log('The response is',res.data);
      setPosts(res.data);
    })
    .catch((err)=>{
      console.log('The error is',err);
    })
  },[])

  return(
    <div>
    </div>
  )
}

//not completed