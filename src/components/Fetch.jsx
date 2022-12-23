import { useState , useEffect } from 'react';
const Fetch = (search,url) => {
    const [infetch, setFetch] = useState({
        items : [], 
        loading : true
      });
    useEffect(function(){
      (async () => {
        const response = await fetch(url);
        const responseData = await response.json();
  
        try{
          setFetch({
            items : responseData,
            loading : false
          })
        }catch(error) {
          console.log(error);
          
        }
      })();
    }, [search])
    return (infetch);
};
export const Fetch_noSearch = (url)=> {
  const [state , setState] = useState([]);
  useEffect(function(){
    (async function(){
      const response = await fetch(url);
      const responseData = await response.json();

      if(response.ok){
        setState(responseData);
      }else{
        console.log("wait");
      }
    })();
  },[])
  return state;
}
export default Fetch;