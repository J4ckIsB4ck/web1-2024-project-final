import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import  "./Blog.css";

function Blog() {
    return (
      <>
        <Navbar/>
          <Box className="box-blog">
            <h1>Blog Page</h1>
        </Box>
        <Footer/>
      </>
    );
  }

export default Blog;