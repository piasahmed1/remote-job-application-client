import { useContext } from "react";
import Banner1 from "./Banner1";
import Footer from "./Footer/Footer";
import { AuthContext } from "../../providers/AuthProvider";
// import Catagores from "../../Components/Catagores/Catagores";
import Slider from "../Slider/Slider";
import AboutUs from "../About Us/AboutUs";
import TabBase from "../../Components/Catagores/TabBase";
// import TabBase from "../../Components/TabBase";



const Home = () => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo)
  return (
    <div>  
      <Banner1></Banner1>
      <TabBase></TabBase>
      <Slider></Slider>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;