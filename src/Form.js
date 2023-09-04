import { useState } from "react";

export default function Form() {

    const [data, setData] = useState({});

    return (
        <>
            <input className="m-2" onChange={(e) => {
                    setData({ ...data, FirstName: e.target.value });
                }} />
            <input className="m-2" onChange={(e) => {
                    setData({ ...data, MiddleName: e.target.value });
                }} />
            <input className="m-2" onChange={(e) => {
                    setData({ ...data, LastName: e.target.value });
                }} />
            <br />
                FirstName = {data.FirstName}
            <br />
                MiddleName = {data.MiddleName}
            <br />
                LastName = {data.LastName}
            <br />
                <button className="btn btn-primary" onClick={() => { console.log(data); }}>Save</button>
        </>
    );
}