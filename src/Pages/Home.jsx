import React from "react"
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// import Image
import openaire from "../Assets/project/OPENAIRE/baru/openaire-1.jpg";
import tabebuya from "../Assets/project/TABEBUYA/thumbnail.JPG"
import lindspapandayan from "../Assets/project/LINDS_PAPANDAYAN/thumbnail.jpg"

// Footer
import Footbar from "../components/Footer";

// Helpers
import hoverFunction from "../helpers/hoverbackground"

// Icon
import {IoIosArrowDropright} from 'react-icons/io';
import {IoIosArrowDropleft} from "react-icons/io"

// Import css
import "./../Supports/home.css"
import "./../Supports/backgroundHover.css"
import "./../Supports/homeresponsive.css"
import "./../Supports/empat.css"
import "./../Supports/responsive.css"

// Redux
import {connect} from "react-redux"
import {onGetData} from "../Redux/Actions/projectaction"

const NextArrow1 = ({ onClick }) => {
    return (
      <div className="arrow next" style={{display:"none"}}  onClick={onClick}>
        <IoIosArrowDropright />
      </div>
    );
  };

  const PrevArrow1 = ({ onClick }) => {
    return (
      <div className="arrow prev" style={{display: "none"}} onClick={onClick}>
        <IoIosArrowDropleft />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <ul className="ularrowPrev">
            <li className="arrowPrev"><span></span></li>
        </ul>
      </div>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick}>
        <ul className="ularrowNext">
            <li className="arrowNext"><span></span></li>
        </ul>
      </div>
    );
  };


class Home extends React.Component{

    componentDidMount(){
        hoverFunction()
        this.onGet()
        // hoverTextFunction()
    }

    onGet = () => {
        this.props.onGetData()

    }

    render (){

        const settings1 = {
            autoplay: true,
            slideToShow: 1,
            slideToScroll: 1,
            fade: true,
            dots: true,
            dotsClass: "slickDots-home",
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            arrow: false
        }

        const settings2 = {
            autoplay: true,
            slideToShow: 1,
            slideToscroll : 1,
            fade:true,
            dots:false,
            nextArrow: <NextArrow1/>,
            prevArrow: <PrevArrow1/>
        }

        return(
           <> 
            <div>
                <Slider {...settings1}>
                    <div>
                        <div className="opacitySlider"></div>
                        <div className="sliderDots">
                            <div className="textDots fontlato">
                                <div className="col" style={{opacity:"1"}}>
                                    Openaire
                                </div>
                                <div className="col" style={{opacity:"0.5"}}>
                                    Lind's Papandayan
                                </div>
                                <div className="col" style={{opacity:"0.5"}}>
                                    Tabebuya
                                </div>
                            </div>
                        </div>
                        <img src={openaire} alt="Jumbotron" className="bgsliderhome"/>
                    </div>
                    <div>
                        <div className="opacitySlider"></div>
                        <div className="sliderDots">
                            <div className="textDots fontlato">
                                <div className="col" style={{opacity:"0.5"}}>
                                    Openaire
                                </div>
                                <div className="col" style={{opacity:"1"}}>
                                    Lind's Papandayan
                                </div>
                                <div className="col" style={{opacity:"0.5"}}>
                                    Tabebuya
                                </div>
                            </div>
                        </div>
                        <img src={lindspapandayan} alt="Jumbotron" className="bgsliderhome"/>
                    </div>
                    <div>
                        <div className="opacitySlider"></div>
                        <div className="sliderDots" >
                            <div className="textDots fontlato" >
                                <div className="col" style={{opacity:"0.5"}}>
                                    Openaire
                                </div>
                                <div className="col" style={{opacity:"0.5"}}>
                                    Lind's Papandayan
                                </div>
                                <div className="col" style={{opacity:"1"}}>
                                    Tabebuya
                                </div>
                            </div>
                        </div>
                        <img src={tabebuya} alt="Jumbotron" className="bgsliderhome"/>
                    </div>
                </Slider>
            </div>

            <Slider {...settings1}>
                {
                    this.props.project.data?
                    this.props.project.data.map((value,index) => {
                        if(index < 3){
                            return(
                                <div key={index}>
                                    <div className="opacitySlider"></div>
                                    {/* <div className="sliderDots">
                                        <div className="textDots fontlato">
                                            <div className="col" style={{opacity:"0.5"}}>
                                                Project {index+1}
                                            </div>
                                        </div>
                                    </div> */}
                                    {
                                        value.image.map((val,idx)=>{
                                            if(idx === 0){
                                                return(
                                                    <div key={idx}>
                                                        <img src={val.image} alt=""  className="bgsliderhome"/>
                                                    </div>
                                                )
                                            }else{
                                                return null
                                            }
                                            
                                        })
                                    }
                                    
                                </div>
                            )
                        }else{
                            return null
                        }
                    })
                    :
                    null
                }
            </Slider>

            {/* ABOUT US */}
        
               <div className="container px-md-3 px-sm-0 px-3 marginhome d-flex justify-content-center" >
                        <div className="col-sm-10 col-12 px-md-3 px-sm-0 px-3" >
                            <div className="col-md px-md-3 px-sm-0 px-0">
                                <div className="fontlato fontAbout" >
                                    ABOUT US
                                </div>
                                <div className= "fontlato col-md-8  col-12 px-0 fontHeadingHome">
                                    Turning spatial experience into a work of art
                                </div>
                                <div className="fontlato col-12 col-sm-11 px-0 fontHomeBody">
                                Joshua Aditama + partners is a multidiciplinary design studio which focused on spatial experience. 
                                We create a connection between art and human to experience interior and architectural spaces. 
                                From commercial to personal spaces drive us to explore the specialty of each projects as works of art. 
                                Brief, concept, and design implementation give a particular excitement for us to be explored together with you.
                                </div>
                                
                                <div className="d-flex fontReadMore">
                                    <div>
                                        <a href="/studio" style={{color:"black"}}>Read More</a>
                                    </div>
                                    
                                    <div style={{marginLeft:"15px"}}>
                                        <a style={{color:"black"}} href="/studio"><IoIosArrowDropright/></a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
               </div>

          

            <div className="container marginproject">
                <div className="d-flex justify-content-center fontprojecthome">
                    Projects
                </div>
            </div>
           
           {/* Hover Home */}
            <div className="hoverHomeNonMobile">
                    <div className="backgroundhover imagehoverproject fontlato" >
                        <div className="hoverimage" style={{padding:"0", margin:"0"}}>
                            <ul className="listhover" style={{padding:"0", margin:"0"}}>
                                <li className="col d-flex align-items-end borderhover border" style={{padding:"0", margin:"0"}} data-bg={openaire}>
                                    <a href="/openaire" style={{width:"100%"}}>
                                        <div className="hoversaya d-flex justify-content-start px-5 align-items-center projectcardheight" >    
                                            <a href="/openaire">
                                                <div className="fonthoverheading">
                                                    Architecture, Interior, Landscape
                                                </div>
                                                
                                                <div className="fonthoverbody">
                                                    OPENAIRE
                                                </div>
                                            </a>
                                        </div>
                                    </a> 
                                </li>
                                <li className="col d-flex align-items-end  borderhover border" style={{padding:"0", margin:"0"}} data-bg={lindspapandayan}>
                                    <a href="/lindspapandayan" style={{width:"100%"}}>
                                        <div className="hoversaya d-flex justify-content-start px-5 align-items-center projectcardheight " >
                                            <a  href="/lindspapandayan">
                                                <div className="fonthoverheading">
                                                    Interior
                                                </div>
                                                <div className="fonthoverbody">
                                                    LIND'S ICE CREAM PAPANDAYAN
                                                </div>
                                            </a>
                                        </div>
                                    </a>
                                </li>
                                <li className="col d-flex align-items-end  borderhover border" style={{padding:"0", margin:"0"}} data-bg={tabebuya}>
                                    <a href="/tabebuya" style={{width:"100%"}}>
                                        <div className="hoversaya d-flex justify-content-start px-5 align-items-center projectcardheight ">
                                            <a  href="/tabebuya">
                                                <div className="fonthoverheading">
                                                    Architecture
                                                </div>
                                                <div className="fonthoverbody">
                                                    TABEBUYA
                                                </div>
                                            </a>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            {/* <div className="hoverHomeNonMobile"> -- INI MAPPING HOVER BACKGROUND TAPI MASIH GAGAL DI DATA-BG
                <div className="backgroundhover imagehoverproject" >
                    <div className="hoverimage" style={{padding:"0", margin:"0"}}>
                        <ul className="listhover" style={{padding:"0", margin:"0"}}>
                            {
                                this.props.project.data?
                                this.props.project.data.map((value,index)=>{
                                    return(
                                        <>
                                            {
                                                value.image.map((val,idx) => {
                                                    return(
                                                        <li className="col d-flex align-items-end borderhover border" style={{padding:"0", margin:"0"}} data-bg={test1}>
                                                            <div className="hoversaya d-flex justify-content-center align-items-center projectcardheight" >
                                                                    <a  href="#">
                                                                        <div className="fonthoverheading" >
                                                                            {value.category}
                                                                        </div>
                                                                        
                                                                        <div className="fonthoverbody">
                                                                            {value.title}
                                                                        </div>
                                                                    </a>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </>
                                    )
                                })
                                :
                                null
                            }
                           
                        </ul>
                    </div>
                </div>
            </div> */}


            <div className="hoverHomeMobile">
                <Slider {...settings2}>
                    <div className="border">
                        <a href="/openaire">
                            <div className="textSliderMobile-home fontlato">
                                <div style={{fontSize:"13px", fontWeight:"700"}}>
                                    Category: Architecture
                                </div>
                                <div  style={{fontSize:"21px", fontWeight:"300"}}>
                                    OPENAIRE
                                </div>
                            </div>
                        </a>
                        <a href="/openaire">
                            <div className="backgroundSliderMobile-homeOpenaire">
                            
                            </div>
                        </a>
                        <div>
                            <img src= {openaire} className="bgSliderMobile-home" alt="" />
                        </div>
                        
                    </div>
                    <div className="border">
                        <a href="/lindspapandayan">
                            <div className="textSliderMobile-home fontlato">
                                <div style={{fontSize:"13px", fontWeight:"700"}}>
                                    Interior
                                </div>
                                <div  style={{fontSize:"21px", fontWeight:"300"}}>
                                    LIND'S ICE CREAM PAPANDAYAN
                                </div>
                            </div>
                        </a>
                            <div className="backgroundSliderMobile-homeLinds">
                            
                            </div>
                        <div>
                            <img src= {lindspapandayan} className="bgSliderMobile-home" alt="" />
                        </div>
                    </div>
                    <div className="border">
                        <a href="/tabebuya">
                            <div className="fontlato textSliderMobile-home">
                                <div style={{fontSize:"13px", fontWeight:"700"}}>
                                    Architecture
                                </div>
                                <div  style={{fontSize:"21px", fontWeight:"300"}}>
                                    TABEBUYA
                                </div>
                            </div>
                        </a>
                        <div className="backgroundSliderMobile-homeStrada">
                            
                        </div>
                        <div>
                            <img src= {tabebuya} className="bgSliderMobile-home" alt="" />
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="hoverHomeMobile">
                <Slider {...settings2}>
                    {
                        this.props.project.data?
                        this.props.project.data.map((value,index) => {
                            return(
                                <div key={index}>
                                    <a href="/projectdetail/155">
                                        <div className="textSliderMobile-home fontlato">
                                            <div style={{fontSize:"13px", fontWeight:"700"}}>
                                                {value.category}
                                            </div>
                                            <div  style={{fontSize:"21px", fontWeight:"300"}}>
                                                {value.title}
                                            </div>
                                        </div>
                                        <div className="backgroundSliderMobile-home">
                                            {/* Kotak gradient */}
                                        </div>
                                        {
                                            value.image.map((val,idx) => {
                                                if(idx === 1){
                                                    return(
                                                        <div key={idx}>
                                                            <img src={val.image} className="bgSliderMobile-home" alt="" />
                                                        </div>
                                                    )
                                                }else{
                                                    return null
                                                }
                                            })
                                        }
                                    </a>
                                </div>
                            )
                        })
                        :
                        null
                    }
                </Slider>
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

                <div className="container px-md-3 px-sm-0 px-3 d-flex flex-column fontlato align-items-center marginservicehome">
                        <div className="fontservice-studio" style={{ fontWeight:"400"}}>
                            Services 
                        </div>
                        <div className=" col-md-12 col-lg-10 col-12 px-md-3 px-sm-0 px-2 margintopcard" >
                            <div className="col d-sm-flex px-md-3 px-sm-0 px-2 ">
                                <div className="col-md-6  px-md-3 px-sm-0 px-0 ">
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        01.
                                    </div>
                                    <div className="textcard-heading mt-1" style={{fontWeight:"300", }}>
                                        Design Concultancy
                                    </div>
                                    <div className="col-md-6 col-9 mt-md-4 mt-3 garis" > 
                                        {/* Garis */}
                                    </div>
                                    <div className="textcard-body mt-md-4 mt-3 " style={{color:"#8F8F8F",letterSpacing:"0.025cm"}}>
                                    As an interior-architecture design studio, we will provide integrated design process for prospective clients. 
                                    From brief-based ideas, design concept, design implementation, to construction drawing and details are executed as a design 
                                    language that is very content and unique for each projects.
                                    </div>
                                </div>
                                <div className=" col-sm-6 margincard ml-md-5 px-md-3 px-sm-2 px-0" >
                                    <div style={{fontSize:"16px", fontWeight:"700"}}> {/* CARD */}
                                        02.
                                    </div>
                                    <div className="textcard-heading mt-1" style={{fontWeight:"300"}}>
                                        Design & Build
                                    </div>
                                    <div className="col-md-6 col-9 mt-md-4 mt-3 garis"> 
                                        {/* Garis */}
                                    </div>
                                    <div className="textcard-body  mt-md-4 mt-3" style={{color:"#8F8F8F",letterSpacing:"0.025cm"}}>
                                    Providing a one-stop building solution for prospective clients in various scale. 
                                    With a strong design language and on-site experiences, we are ready to work simultaneously 
                                    with our competent and experienced partners.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footbar/>
           </>
        )
    }
}

const mapDispatchToProps = {
    onGetData
}

const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Home)

