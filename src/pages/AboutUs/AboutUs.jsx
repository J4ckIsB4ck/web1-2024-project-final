import { Box } from "@mui/material";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import  "./AboutUs.css";

function AboutUs() {
    return (
      <>
        <Navbar/>
          <Box className="box-about">
            <h1>About Us Page</h1>
          </Box>
        <Footer/>
      </>
    );
  }

export default AboutUs;