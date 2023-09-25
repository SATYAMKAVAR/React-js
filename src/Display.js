import { useState } from "react";
import useCustomCount from "./usecustomcount";
export default function Display() {
    let [count, Incrimane, decriment] = useCustomCount(0,5);
    return (
        <div className="m-2">
            {/* {count}    */}
            <h1>{count}</h1>
            <button className="btn btn-info m-1"
                onClick={
                    Incrimane
                }
            >Incrase one</button>
            <button className="btn btn-info m-1"
                onClick={
                    decriment
                }
            >Decrease one</button>
        </div>
    );
}