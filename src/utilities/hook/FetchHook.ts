import { useEffect, useState } from "react";
 
export function useFetchGetRequest(url:string) {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");
 
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        setTimeout(() => {
            seterror(data?.error)
            setdata(data)
            setloading(false)
        }, 3000);
    })
  }, [url]);
 
  return { data, loading, error };
};
 
  