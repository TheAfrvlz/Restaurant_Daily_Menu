import { response } from 'express';
import {useEffect,useState} from 'react'

function useFetch (url){

    const [Data,setData] = useState(null);
    const [Load,setLoad] = useState(null);
    const [Error,setError] = useState(null);

    useEffect(()=>{
      const AbortController = new AbortController();

      setLoad(true);
      fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(()=>setLoad(false));

      return () => AbortController.abort();
    },[]);

  return {Data,Load,Error};
}

export default useFetch;
