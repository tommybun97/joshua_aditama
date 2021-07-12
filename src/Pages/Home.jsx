import React from "react"
import {Link, Redirect} from "react-router-dom"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useHistory } from "react-router-dom";


// import Image
import logo from "./../Assets/logo-2.png"
import gambarHome1 from "./../Assets/fotoHome-1.png"
import background2 from "./../Assets/background-2.JPG"
import gambarHome2 from "./../Assets/fotoHome-2.png"
import Jumbotron from "./../Assets/jumbotron.JPG"
import myService from "./../Assets/myService.png"
import arrow from "./../Assets/arrow.png"
import test1 from "./../Assets/project/test1.png"
import jumbotron from './../Assets/jumbotron.JPG'

// Helpers
import hoverFunction from "../helpers/hoverbackground"


// Import css
import "./../Supports/home.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./../Supports/backgroundHover.css"
import "./../Supports/homeresponsive.css"
import "./../Supports/responsive.css"

const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" style={{display:"none"}} onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" style={{display:"none"}} onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

class Home extends React.Component{

    
    componentDidMount(){
        hoverFunction()
    }

    render () {

        const settings = {
            autoplay: true,
            slideToShow: 1,
            slideToScroll: 1,
            dots: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
        }

        return(
           <> 
            <div>
                <Slider {...settings}>
                    <div>
                        <img src={Jumbotron} alt="Jumbotron" className="bgsliderhome"/>
                    </div>
                    <div>
                        <img src={gambarHome1} alt="" className="bgsliderhome" />
                    </div>
                    <div>
                       <img src={background2} alt="" className="bgsliderhome"  />
                    </div>
                </Slider>
            </div>

            {/* ABOUT US */}
        
               <div className="container px-md-3 px-sm-0 px-3 marginhome d-flex justify-content-center" >
                        <div className="col-sm-10 col-12  px-md-3 px-sm-0 px-3" >
                            <div className="col-md px-md-3 px-sm-0 px-3">
                                <div className="fontlato fontAbout" >
                                    ABOUT US
                                </div>
                                <div className= "fontlato col-md-7 col-10 px-0 fontHeadingHome">
                                    Turning spatial experience into a work of art
                                </div>
                                <div className="fontlato col-11 px-0 fontHomeBody">
                                Joshua Aditama + partners is a multidiciplinary design studio which focused on spatial experience. 
                                We create a connection between art and human to experience interior and architectural spaces. 
                                From commercial to personal spaces drive us to explore the specialty of each projects as works of art. 
                                Brief, concept, and design implementation give a particular excitement for us to be explored together with you.
                                </div>
                                
                                <div className="d-flex fontReadMore">
                                    <div>
                                        Read More
                                    </div>
                                    <div style={{marginLeft:"25px"}}>
                                        <img src={arrow} alt="" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
               </div>

          

            <div className="container marginproject">
                <div className="d-flex justify-content-center" style={{fontSize:"46px", fontWeight:"400"}}>
                    Projects
                </div>
            </div>
           
           {/* Hover Home */}
           <div className="backgroundhover imagehoverproject" >
                <div className="hoverimage" style={{padding:"0", margin:"0"}}>
                    <ul className="listhover" style={{padding:"0", margin:"0"}}>
                        <li className="col d-flex align-items-end borderhover" style={{padding:"0", margin:"0"}} data-bg={jumbotron}>
                           <div className="hoversaya d-flex justify-content-center align-items-center projectcardheight" >
                                <a  href="#">
                                    <div className="fonthoverheading" >
                                        Furniture
                                    </div>
                                    
                                    <div className="fonthoverbody">
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        <li className="col  d-flex align-items-end justify-content-center borderhover" style={{padding:"0", margin:"0"}} data-bg={test1}>
                           <div className="hoversaya d-flex justify-content-center align-items-center projectcardheight " >
                                <a  href="#">
                                    <div className="fonthoverheading">
                                        Furniture
                                    </div>
                                    <div className="fonthoverbody">
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        <li className="col  d-flex align-items-end justify-content-center borderhover" style={{padding:"0", margin:"0"}} data-bg={jumbotron}>
                           <div className="hoversaya d-flex justify-content-center align-items-center projectcardheight ">
                                <a  href="#">
                                    <div className="fonthoverheading">
                                        Furniture
                                    </div>
                                    <div className="fonthoverbody">
                                        Tentrem Hotel Semarang
                                    </div>
                                </a>
                           </div>
                        </li>
                        
                    </ul>
                </div>
            </div>



            {/* <div className=" background2 " style={{width:"100%", height:"700px",marginTop:"20px"}}>
                test
            </div> */}

            {/*  */}

            
                <div className=" d-flex justify-content-center marginbuttonhome" >
                    <a href="/project">
                            <button  className="fontlato btn-11" style={{width:"119px", height: "52px", borderRadius: "40px", fontSize:"13px", fontWeight:"normal", border:"1px solid black" }}>
                                View More
                            </button>
                    </a>
                </div>

                <div className="container d-flex flex-column fontlato align-items-center marginservicehome">
                        <div className="fontservice-studio" style={{ fontWeight:"400"}}>
                            Services 
                        </div>
                        <div className=" col-md-12 col-lg-10 col-12 px-md-3 px-sm-0 px-4 margintopcard" >
                            <div className="col d-sm-flex px-md-3 px-sm-0 px-4">
                                <div className="col-md-6  px-md-3 px-sm-2 px-3 ">
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        01.
                                    </div>
                                    <div className="textcard-heading mt-1" style={{fontWeight:"300", }}>
                                        Design Concultancy
                                    </div>
                                    <div className="col-md-6 col-9 mt-md-4 mt-3 garis" > 
                                        {/* Garis */}
                                    </div>
                                    <div className="textcard-body mt-md-4 mt-3 " style={{ fontWeight:"300", color:"#8F8F8F",letterSpacing:"0.025cm"}}>
                                    As an interior-architecture design studio, we will provide integrated design process for prospective clients. 
                                    From brief-based ideas, design concept, design implementation, to construction drawing and details are executed as a design 
                                    language that is very content and unique for each projects.
                                    </div>
                                </div>
                                <div className=" col-sm-6 margincard ml-md-5 px-md-3 px-sm-2 px-3" >
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        02.
                                    </div>
                                    <div className="textcard-heading mt-1" style={{fontWeight:"300"}}>
                                        Design & Build
                                    </div>
                                    <div className="col-md-6 col-9 mt-md-4 mt-3 garis"> 
                                        {/* Garis */}
                                    </div>
                                    <div className="textcard-body  mt-md-4 mt-3" style={{fontWeight:"300", color:"#8F8F8F",letterSpacing:"0.025cm"}}>
                                    Providing a one-stop building solution for prospective clients in various scale. 
                                    With a strong design language and on-site experiences, we are ready to work simultaneously 
                                    with our competent and experienced partners.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
           
           </>
        )
    }
}

export default Home

