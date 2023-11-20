import React, {useEffect, useState} from "react";
import axios from 'axios'; 

function App(){
  const[hello, setHello] = useState('');
  

  useEffect(()=> {
    axios.get('/test/hello')
         .then(res => setHello(res.data))
         .catch(err => console.log(err))
  }, []); 
  return(
    <div>
      받아온 값 : {hello}
    </div>
  );

}

export default App; 