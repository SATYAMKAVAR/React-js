import { useEffect, useState } from "react";
export default function UseEffectDemo(){
    
    let [a,setA] = useState(0);
    
    useEffect(()=>{console.log("hello");},[])
    
    return(
        <>
            {a}
            <button className="btn btn-primary"
                onClick={
                    ()=>{
                        setA((prev)=>{
                            return prev+1;
                        });
                        setA((prev)=>{
                            return prev+3;
                        })
                    }
                }
            >
                Incrase
            </button>
        </>
    );
}