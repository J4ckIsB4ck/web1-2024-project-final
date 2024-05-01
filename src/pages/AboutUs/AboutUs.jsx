import Icon from '@mui/material/Icon';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import  "./AboutUs.css";

function AboutUs() {
    return (
      <>
        <Navbar/>
          <div className="container-about">
            <div className="header-about">
              <h1>Our Team</h1>
            </div>
            <div className="sub-container-about">
            <div className="teams-about">
                <img src="Person_one_team.jpg" alt="prs_one_team" />
                <div className="name">Person name</div>
                <div className="desig">Developer</div>
                <div className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                   Architecto harum laborum voluptate reiciendis animi tempore deleniti illo omnis saepe. Perferendis.</div>
                   <div className="social-links">
                      <a href="#"><Icon className="fab fa-facebook" /></a>
                      <a href="#"><Icon className="fab fa-instagram" /></a>
                      <a href="#"><Icon className="fab fa-twitter" /></a>
                      <a href="#"><Icon className="fab fa-github" /></a>
                   </div>
            </div>

            <div className="teams-about">
                <img src="Person_two_team.jpg" alt="prs_two_team" />
                <div className="name">Person name</div>
                <div className="desig">Designer</div>
                <div className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                   Architecto harum laborum voluptate reiciendis animi tempore deleniti illo omnis saepe. Perferendis.</div>
                   <div className="social-links">
                      <a href="#"><Icon className="fab fa-facebook" /></a>
                      <a href="#"><Icon className="fab fa-instagram" /></a>
                      <a href="#"><Icon className="fab fa-twitter" /></a>
                      <a href="#"><Icon className="fab fa-github" /></a>
                   </div>
            </div>

            <div className="teams-about">
                <img src="Person_three_team.jpg" alt="prs_three_team" />
                <div className="name">Person name</div>
                <div className="desig">Manager</div>
                <div className="about">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                   Architecto harum laborum voluptate reiciendis animi tempore deleniti illo omnis saepe. Perferendis.</div>
                   <div className="social-links">
                      <a href="#"><Icon className="fab fa-facebook" /></a>
                      <a href="#"><Icon className="fab fa-instagram" /></a>
                      <a href="#"><Icon className="fab fa-twitter" /></a>
                      <a href="#"><Icon className="fab fa-github" /></a>
                   </div>
            </div>
            </div>
          </div>
        <Footer/>
      </>
    );
  }

export default AboutUs;