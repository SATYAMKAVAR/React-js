export default function Home(){
    return (
        <div className="row">
            <div className="col">
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://darshan.ac.in/U01/Slider/Slide_4.jpg?V=2.1.4" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://darshan.ac.in/U01/Slider/Slide_3.jpg?V=2.1.4" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://darshan.ac.in/U01/Slider/Slide_5.jpg?V=2.1.4" className="d-block w-100 img-fluid img-thumbnail" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            A list item
                            <span className="badge bg-primary rounded-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            A second list item
                            <span className="badge bg-primary rounded-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            A third list item
                            <span className="badge bg-primary rounded-pill">1</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}