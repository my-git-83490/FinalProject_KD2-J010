import React from 'react'

function About() {
    return (
        <div className="container mt-5">
            <h2>About Us</h2>
            <p className="lead">We are a team of passionate developers dedicated to creating the best clothing rental experience.</p>
            <div className="row">
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img src="path-to-developer1-image.jpg" className="card-img-top" alt="Developer 1" />
                        <div className="card-body">
                            <h5 className="card-title">Developer 1</h5>
                            <p className="card-text">Lead Developer</p>
                            <p className="card-text">Developer 1 has a strong background in full-stack development and is passionate about building scalable web applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img src="path-to-developer2-image.jpg" className="card-img-top" alt="Developer 2" />
                        <div className="card-body">
                            <h5 className="card-title">Developer 2</h5>
                            <p className="card-text">UI/UX Designer</p>
                            <p className="card-text">Developer 2 specializes in designing user-friendly interfaces and creating seamless user experiences.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img src="path-to-developer3-image.jpg" className="card-img-top" alt="Developer 3" />
                        <div className="card-body">
                            <h5 className="card-title">Developer 3</h5>
                            <p className="card-text">Backend Developer</p>
                            <p className="card-text">Developer 3 is an expert in backend technologies and ensures that our application runs smoothly and efficiently.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card mb-4 shadow-sm">
                        <img src="path-to-developer3-image.jpg" className="card-img-top" alt="Developer 3" />
                        <div className="card-body">
                            <h5 className="card-title">Developer 4</h5>
                            <p className="card-text">Backend Developer</p>
                            <p className="card-text">Developer 3 is an expert in backend technologies and ensures that our application runs smoothly and efficiently.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About