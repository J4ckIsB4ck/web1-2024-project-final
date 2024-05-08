import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Icon from '@mui/material/Icon';
import  "./Blog.css";

function Blog() {
    return (
      <>
        <Navbar/>
          <div className="blog-back">
            <div className="blog-content">
              <div className="blog-container">
                <h1 className="blog-title">
                  <span>The QuickB Blog</span>
                </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Alias eaque, aperiam ullam minima aut tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="blog-design">
            <div className="blog-container">
              <div className="title">
                <h2>Some text</h2>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>

              <div className="blog-design-content">
                <div className="blog-design-item">
                  <div className="blog-design-img">
                    <img src="test_image.jpg" alt="" />
                    <Icon className="far fa-heart"/>
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className="blog-design-title">
                    <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque consectetur laborum magnam.</a>
                  </div>
                </div>

                <div className="blog-design-item">
                  <div className="blog-design-img">
                    <img src="test_image.jpg" alt="" />
                    <Icon className="far fa-heart"/>
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className="blog-design-title">
                    <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque consectetur laborum magnam.</a>
                  </div>
                </div>
                
                <div className="blog-design-item">
                  <div className="blog-design-img">
                    <img src="test_image.jpg" alt="" />
                    <Icon className="far fa-heart"/>
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className="blog-design-title">
                    <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque consectetur laborum magnam.</a>
                  </div>
                </div>

                <div className="blog-design-item">
                  <div className="blog-design-img">
                    <img src="test_image.jpg" alt="" />
                    <Icon className="far fa-heart"/>
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className="blog-design-title">
                    <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque consectetur laborum magnam.</a>
                  </div>
                </div>

                <div className="blog-design-item">
                  <div className="blog-design-img">
                    <img src="test_image.jpg" alt="" />
                    <Icon className="far fa-heart"/>
                    <span>Lorem, ipsum dolor.</span>
                  </div>
                  <div className="blog-design-title">
                    <a href="#">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Cumque consectetur laborum magnam.</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer/>
      </>
    );
  }

export default Blog;