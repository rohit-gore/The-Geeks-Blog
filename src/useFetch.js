import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () => {
      const abortCont = new AbortController();

      // It runs the function here, when the component first renders.
      /* Don't use timeout function in real world application, 
        this delays the loading time, it is just for trial*/
      setTimeout(() => {
        fetch(url, { signal: abortCont.signal })
          .then((res) => {
            if (!res.ok) {
              throw Error("An ERROR has occured while fetching the data.");
            }
            return res.json();
          })
          .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            if (err.name === 'AbortError'){
              console.log('fetch aborted');
            }else{
              setIsPending(false);
              setError(err.message);
            }
            
          });
      }, 1000);

      return () => abortCont.abort();

    },
    [url] /* --> dependencies */
  );

  return {data, isPending, error}
};

export default useFetch;
