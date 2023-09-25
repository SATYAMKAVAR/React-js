import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function StudentAdd() {
    const [data, setdata] = useState({});
    const parms = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (parms.id > 0) {
            fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student/" + parms.id, { method: "GET" })
                .then((res) => { return res.json() })
                .then((res) => { setdata(res) });
            console.log("satyam");
        }
        else{
            setdata({});
            console.log("emplty");
        }
    }, [parms.id]);
    return (
        <>
            {/* (!parms.id > 0) ? data.name = "":data.name */}
            <div className="mb-3">
                <label for="formGroupExampleInput" className="form-label">Student Name</label>
                <input type="text" value={data.name || ""} className="form-control" id="formGroupExampleInput" placeholder="satyam Kavar" onChange={(e) => {
                    setdata({ ...data, name: e.target.value });
                }} />   
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student image</label>
                <input type="text" value={data.avatar || ""} className="form-control" id="formGroupExampleInput2" placeholder="Enter image Url" onChange={(e) => {
                    setdata({ ...data, avatar: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student age</label>
                <input type="number" value={data.age || ""} className="form-control" id="formGroupExampleInput2" placeholder="18" onChange={(e) => {
                    setdata({ ...data, age: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student address</label>
                <input type="text" value={data.address || ""} className="form-control" id="inputAddress" placeholder="Morbi" onChange={(e) => {
                    setdata({ ...data, address: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <label for="formGroupExampleInput2" className="form-label">Student email</label>
                <input type="email" value={data.Email || ""} className="form-control" id="InputEmail4" placeholder="satyamKavar@gmail.com" onChange={(e) => {
                    setdata({ ...data, Email: e.target.value });
                }} />
            </div>
            <div className="mb-3">
                <div className="btn btn-primary" onClick={() => {
                    if (Object.keys(data).length === 0) {
                        console.log("hello");
                        alert("please enter the student detail");
                    }
                    if (parms.id > 0) {
                        navigate("/StudentAdd/" + parms.id)
                        fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student/" + parms.id,
                            {
                                method: "put",
                                body: JSON.stringify(data),
                                headers: { "Content-Type": "application/json" }
                            }
                        )
                            .then(() => { navigate("/Students") });
                    }
                    else {
                        fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student",
                            {
                                method: "post",
                                body: JSON.stringify(data),
                                headers: { "Content-Type": "application/json" }
                            }
                        )
                            .then((res) => { navigate("/Students") });
                    }
                }}>
                    {parms.id > 0 && "Edit "}
                    {!(parms.id > 0) && "Add "}
                    Student
                </div>
            </div>
        </>
    );
}