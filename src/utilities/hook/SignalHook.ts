import { useEffect, useState } from 'react';

export function useSignal(timeInterval:number) {

  const signalArr = ["red","blue","green","yellow","purple","orange"];

  const [i, setI] = useState(0);
  const [value, setValue] = useState(signalArr[0]);

 

  useEffect(() => {
    const interval = setInterval(() => {
        setI(i=>i+1);
    }, timeInterval);
    return () => clearInterval(interval);
  }, []);


   useEffect(()=>{
        console.log("i ",i)
        const position = (i % signalArr.length) ;
        setValue(signalArr[position]);
    },[i])


   useEffect(()=>{
      console.log("value ",value)
    },[value])


  return [value];
}