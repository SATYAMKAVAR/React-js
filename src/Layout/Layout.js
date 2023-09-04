import { Outlet, Link } from "react-router-dom"

export default function Layout() {
    return (
        <>
            {/* <div className="row">
                <p className="col-4">Computer Science engineering Department Facultys list :</p>
                <Link className="btn btn-primary col-1" to="/Fac">
                    Faculty list
                </Link>
            </div> */}

            {/* <Outlet /> */}

            <div className="row p-2">
                <div className="col-2">
                    <img className="img-fluid" src="https://darshan.ac.in/Content/media/DU_Logo.svg" />
                </div>
                <div className="col">
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="./Home">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="./Aboute" >Aboute us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/Fac">Faculty</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/Students">Students</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/StudentAdd">StudentAdd</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="m-3">
                    <Outlet />
                </div>
                {/* <div className="col m-3 border border-danger">
                    <h1>Slidebar</h1>
                </div> */}
            </div>
            <div className="row m-3 border border-success">
                {/* <h1>Footer</h1> */}
                <footer className="bg-dark text-center text-white">
                    <div className="container p-4 pb-0">
                        <section className="mb-4">
                            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button" to="./Home">
                                <i className="fab fa-facebook-f">Home</i>
                            </Link>
                            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button" to="./Aboute">
                                <i className="fab fa-twitter">Aboute us</i>
                            </Link>
                            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button" to="/Fac">
                                <i className="fab fa-google">Faculty</i>
                            </Link>
                            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button" to="/Students">
                                <i className="fab fa-instagram">Students</i>
                            </Link>
                            <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"to="/StudentAdd">
                                <i className="fab fa-linkedin-in">Student Add</i>
                            </Link>
                        </section>
                    </div>

                    {/* <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                        © 2020 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                    </div> */}
                </footer>
            </div>
        </>
    );
};