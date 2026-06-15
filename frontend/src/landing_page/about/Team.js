import React from 'react';

function Team() {
    return (
        <div className="container">
            <div className="row mb-4 mb-lg-5 mt-4" style={{ color: "#424242" }}>
                <h2 className="fs-4 mb-4 mb-lg-5 text-center">People</h2>
            </div>

            <div className="row text-muted align-items-center justify-content-center gy-4" style={{ lineHeight: "1.8", fontSize: "1rem", color: "#424242" }}>
                <div className="col-12 col-lg-5 text-center mb-4 mb-lg-0">
                    <img src="./media/IndiraKeerthana.jpeg" alt="Indira Keerthana"
                        className="img-fluid"
                        style={{
                            width: "300px",
                            maxWidth: "100%",
                            aspectRatio: "1 / 1",
                            borderRadius: "50%",
                            objectFit: "cover"
                        }}
                    />
                    <h2 className="fs-5 mt-3">Indira Keerthana</h2>
                    <p>Full-Stack Developer</p>
                </div>
                <div className="about-links col-12 col-lg-6">
                    <p>
                        Keerthana is an aspiring full-stack developer and engineering student passionate about building modern web applications and real-world fintech projects.
                    </p>

                    <p>
                        Through TradeFlow, she explored recreating and understanding how large-scale stock trading platforms are designed with clean UI, responsive layouts, and scalable architecture.
                    </p>

                    <p>
                        Her interests include frontend development, backend systems, UI/UX design, and building production-style applications using modern web technologies.
                    </p>

                    <p>
                        Beyond coding, she enjoys learning new technologies, exploring creative designs, and continuously improving her development skills through hands-on projects.
                    </p>

                    <p>
                        TradeFlow represents both a learning journey and a portfolio project focused on mastering full-stack development through real-world inspired applications.
                    </p>

                    <p>
                        Connect on <a href="https://github.com/IndiraKeerthana" target='_blank'>GitHub</a>/ <a href="https://www.linkedin.com/in/indira-keerthana-pulla/" target='_blank'>LinkedIn</a> / <a href="https://indirakeerthana.github.io/IndiraKeerthana-Portfolio/index.html" target='_blank'>Portfolio</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;