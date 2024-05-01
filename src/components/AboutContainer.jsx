import './AboutContainer.css';

function AboutContainer () {
    return(
        <>
        <div className="wrapper-about">
            <div className="title-about">
                <h3>Who We Are</h3>
            </div>
            <div className="wrapper-about-group">
                <div className="text-about">
                    <div className="image-section">
                        <img src="about_container_one.jpg" alt="who_we_are" />
                    </div>
                    <article>
                        <h2>Empowering Learning Through Engaging Quizzes</h2>
                        <p>We are a team of enthusiasts behind the QuickB project. 
                            Our goal is to create interactive and engaging quizzes
                            that not only entertain but also enrich knowledge. We 
                            believe in the power of learning through play and strive 
                            to make education entertaining and accessible to all.</p>
                    </article>     
                </div>
                <div className="text-about">
                    <div className="image-section">
                        <img src="about_container_two.jpg" alt="who_we_are" />
                    </div>
                    <article>
                        <h2>Explore a World of Knowledge with QuickB</h2>
                        <p>QuickB is not just a series of questions and answers. 
                            We aim to offer a unique experience that allows our 
                            users to delve into various topics, from history and 
                            science to pop culture and technology. We carefully 
                            curate questions and develop content to ensure that 
                            each quiz is both captivating and informative.</p>
                    </article>     
                </div>
                <div className="text-about">
                    <div className="image-section">
                        <img src="about_container_three.jpg" alt="who_we_are" />
                    </div>
                    <article>
                        <h2>Meet Our Expert Team and Explore the World of QuickB!</h2>
                        <p>Our team consists of professionals in education, content 
                            development, and web technologies. We are constantly working 
                            to improve our service to provide our users with the best 
                            possible experience.Join us on a journey through the world of 
                            knowledge and entertainment with QuickB!</p>
                    </article>     
                </div>
            </div>
        </div>
        </>
    );
}

export default AboutContainer;