import './AboutTimeline.css';

function AboutTimeline () {
    return(
        <>
        <div className="timeline-about">
            <h2 className="heading">QuickB Timeline</h2>
            <div className="timeline-items">
                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2024</div>
                        <div className="timeline-content">
                            <h3>Job</h3>
                            <p>Lorem ipsum dolor sit amet
                                 consectetur adipisicing elit. 
                                 Deleniti fugit nesciunt voluptatum 
                                 quisquam? Aliquam minima, voluptate 
                                 corporis exercitationem repellat vitae?
                            </p>
                        </div>
                    </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2023</div>
                        <div className="timeline-content">
                            <h3>Intership</h3>
                            <p>Lorem ipsum dolor sit amet
                                 consectetur adipisicing elit. 
                                 Deleniti fugit nesciunt voluptatum 
                                 quisquam? Aliquam minima, voluptate 
                                 corporis exercitationem repellat vitae?
                            </p>
                        </div>
                    </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2022</div>
                        <div className="timeline-content">
                            <h3>University</h3>
                            <p>Lorem ipsum dolor sit amet
                                 consectetur adipisicing elit. 
                                 Deleniti fugit nesciunt voluptatum 
                                 quisquam? Aliquam minima, voluptate 
                                 corporis exercitationem repellat vitae?
                            </p>
                        </div> 
                    </div>

                <div className="timeline-item">
                    <div className="timeline-dot"></div>
                        <div className="timeline-date">2021</div>
                        <div className="timeline-content">
                            <h3>High School</h3>
                            <p>Lorem ipsum dolor sit amet
                                 consectetur adipisicing elit. 
                                 Deleniti fugit nesciunt voluptatum 
                                 quisquam? Aliquam minima, voluptate 
                                 corporis exercitationem repellat vitae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutTimeline;