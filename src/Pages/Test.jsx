import React from "react"
import {connect} from "react-redux"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Action
import { onGetData } from "../Redux/Actions/projectaction"

// import Function 
import testClick from "../helpers/testClick";

// Import css
import "./../Supports/home.css"
import "./../Supports/hover.css"
import "./../Supports/test.css"

class Test extends React.Component{
    
    componentDidMount(){
        testClick()
    }

    // onClick = () => {
    //     testClick()
    // }

    // onGet = () => {
       

    //     this.props.onGetData()
    // }

    render(){


        return(
            <>

            {/* Handle Click Css */}
            <div className="container d-flex justify-content-between" style={{marginTop:"200px"}}>
                <div className="textClick">
                    Text Click
                </div>
                <div>
                    <input className="buttonClick"  type="button" value="Click Me"/>
                    <div>
                        test
                    </div>
                </div>
            </div>


            {/* Test Slider */}
                {/* <div className="my-5 container" >
                    <Slider  {...settings} >
                        {
                            images.map((value,index) => {
                                return(
                                    <div  >
                                        <img src={value} alt="" style={{width:"100%", height:"500px"}} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                    
                </div> */}
                
            

           




















                {/* Test Hover Home */}
              {/* <div className="container d-flex bgcard" style={{height:"400px", position:"relative", top:"200px"}}>
                <div className="border col-4 d-flex align-items-end" id="picture_one" style={{height:"400px"}}>
                    <div className="d-flex flex-column justify-content-end cardhover1 border" style={{height:"150px", width:"400px"}}>
                        <div>
                            Ini Judul
                        </div>
                        <div>
                            Ini Deskripsi
                        </div>
                    </div>
                </div>
                <div className="border col-4 d-flex align-items-end" style={{height:"400px"}}>
                    <div className="d-flex flex-column justify-content-end cardhover1 border" id="picture_two" style={{height:"150px", width:"400px"}}>
                        <div>
                            Ini Judul
                        </div>
                        <div>
                            Ini Deskripsi
                        </div>
                    </div>
                </div>
                <div className="border col-4 d-flex align-items-end" style={{height:"400px"}}>
                    <div className="d-flex flex-column justify-content-end cardhover1 border" id = "picture_three" style={{height:"150px", width:"400px"}}>
                        <div>
                            Ini Judul
                        </div>
                        <div>
                            Ini Deskripsi
                        </div>
                    </div>
                </div>
              </div> */}
                
              


            {/* Test Maping */}
            {/* <div className="container d-flex  justify-content-between" style={{paddingTop:"200px"}}>
                {
                    this.props.project.data?
                    this.props.project.data.map((value,index) => {
                        return(
                            <>
                                <div>
                                    {value.title}
                                </div>
                                <div>
                                    {value.description}
                                </div>
                                <div>
                                    {
                                        value.image.map((val,idx) => {
                                            return(
                                                <div key={idx} className="border" style={{width:"200px", height:"100px"}}>
                                                    <img src={val.image} alt="image gagal" style={{width:"200px", height:"100px"}}/>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                </div>
                                <br />
                            </>
                        )
                    })
                    :
                    null
                }
            </div> */}

            {/* <div className="container" style={{paddingTop:"200px"}}>
                <div>
                    <div>
                        <hr />
                        {
                            this.props.project.data?
                            this.props.project.data.map((value,index) => {
                                return(
                                    <>
                                        <div>
                                            <div className="d-flex">
                                                <div className="col-1">
                                                    {index+1}
                                                </div>
                                                <div className="col">
                                                    {value.title}
                                                </div>
                                                <div className="col">
                                                    {value.description}
                                                </div>
                                                <div className="col">
                                                    {
                                                        value.image.map((val,idx) => {
                                                            return(
                                                                <div>
                                                                    <img src={val.image} className="border" alt="" style={{width:"100px", height:"100px"}} />
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <br />
                                    </>
                                )
                            }) 
                            :
                            null
                        }
                    </div>
                </div>
            </div> */}

           
            

            {/* {
                    this.props.project.data?
                    this.props.project.data.map((value,index) => {
                        if(index % 3 == 0){ 
                            return(
                                <>
                                <div className="card " style={{width: "200px", marginTop:"200px"}}>   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                </>
                            )
                        }else if(index % 2 === 0){ //Genap
                            return(
                                <>
                                <div className="card " style={{width: "18rem", marginTop:"200px"}}>   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                </>
                            )
                        }else{
                            return( // Ganjil
                                <>
                                <div className="card " style={{width: "400px", marginTop:"200px"}}>   
                                    <div className="card-body">
                                        <h5 className="card-title">{value.title}</h5>
                                        <p className="card-text">{value.description}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                </>
                            )
                        }
                        
                    })
                    :
                        null
                } */}

                {/* Yang belum bisa */}
                
                {/* Front-end */}
                {/* 1. Animasi slick di home */}
                {/* 2. Animasi Hover di home */} 

                {/* Back-end */}
                {/* 1. Get image */}

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

export default connect(mapStateToProps, mapDispatchToProps) (Test)