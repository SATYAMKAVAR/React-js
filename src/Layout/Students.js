import { useEffect, useState } from "react";
import {Link,useNavigate} from "react-router-dom"

export default function Student() {
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student",{method:"GET"})
            .then((res) => { return res.json(); })
            .then((res) => { setStudent(res) });
    }, []);

    const StudentData = student.map((stu, index) => {
        return (
            <>
                <div className="col-3" key={index}>
                    <div className="card1 text-center">
                        <div className="card" onClick={()=>{navigate("/StudentDetail/" + stu.id)}}>
                            <img id="img" className="card-img-top" src={stu.avatar} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{stu.name}</h5>
                                <p className="card-text ">{stu.id}</p>
                                <p className="card-text ">{stu.Email}</p>
                            </div>
                            <div className="card-body">
                                {/* <Link to={"/StudentDetail/" + stu.id} className="btn btn-primary m-2">Detail</Link> */}
                                {/* <button className="btn btn-danger m-2" onClick={() => {
                                    fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student" + "/" + stu.id, { method: "Delete" });
                                    // .then((res)=> navigate("/Student"));
                                    setStudent([
                                        ...student.filter((e) => {
                                            return (e.id !== stu.id);
                                        })
                                    ]);
                                }}>Delete</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    });
    return (
        <>
            <div className="row">{StudentData}</div>
        </>
    );
}