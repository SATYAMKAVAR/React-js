import { useState } from "react";
export default function Display() {
    let [a, setA] = useState(0);
    return (
        <div className="m-2">
            {a}
            <button className="btn btn-info m-1"
                onClick={
                    () => {
                        setA(a + 1);

                    }
                }
            >Incrase one</button>
        </div>
    );
}