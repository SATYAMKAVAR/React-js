import { useState } from "react";

const useCustomCount = (val,step) => {
    const [count,setCount] = useState(val);
    
    const Incrimane = ()=>{
        setCount(count + step);    
    }
    const decriment = ()=>{
        setCount(count - step);    
    }
  return [count,Incrimane,decriment]
};

export default useCustomCount;
