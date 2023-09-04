import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"

export default function StudentDetail() {
    const { id } = useParams();
    const [stu, setStu] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student/" + id,{method:"GET"})
            .then((res) => { return res.json() })
            .then((res) => { setStu(res) });
    }, []);
    return (
        <>
            <div className="row" key={id}>
                <div className="col-3">
                    <img src={stu.avatar} className="img-fluid" />
                </div>
                <div className="col-3">
                    {stu.id}
                    <br />
                    {stu.name}
                    <br />
                    {stu.age}
                    <br />
                    {stu.address}
                    <br />
                    {stu.Email}
                </div>
            </div>
            <div className="row my-2">
                <div className=" col-3">
                    <Link to="/Students" className="btn btn-primary">Back</Link>
                </div>
                <div className=" col-3">
                    <Link to={"/StudentEdit/"+id} className="btn btn-primary">Edit Student</Link>
                </div>
                <div className=" col-3">
                    <div  className="btn btn-primary" onClick={()=>{
                        setStu({...stu,avatar:"https://th.bing.com/th/id/OIP.lhmC35cDIwGov-aWutxtbgHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"});
                    }}>Get Qr code</div>
                </div>
                <div className="col-3">
                    <button className="btn btn-danger" key={id}
                        onClick={() => {
                                fetch("https://64da0fe4e947d30a260ab3e6.mockapi.io/Student" + "/" + id, { method: "Delete" })
                                .then((res) => { navigate("/Students") });
                        }}
                    >Delete Student</button>
                </div>
            </div>
        </>
    );
}
