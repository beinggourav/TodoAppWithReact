import { useEffect, useState } from "react";

const useFetch = (url)=>{

    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true); 
    const [error, setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();  // to abort the previous routing when we go to new route before the previous component change completely

        fetch(url, {signal: abortCont.signal})       // using url and not hardcoding so that we can use it anywhere else also
        .then(res=>{
            if(!res.ok){
                throw Error('Could not fetch the data');
            }
            return res.json();                  
        })
        .then(data=>{
            setData(data);   
            setLoading(false);
            setError(null);
        })
        .catch((err)=>{
            if(err.name==='AbortError'){    // once the fetching is aborted it will catch error of aborting and will try to change the state, to save from this we use conditional catch here
                console.log('fetch aborted');
            }else{
                setError(err.message); 
                setLoading(false); 
            }
        });
        return ()=> abortCont.abort();
    },[url]);

    return {data, isLoading, error};// returning object(or array) so that we can use them in diff file by useFetch
};

export default useFetch;