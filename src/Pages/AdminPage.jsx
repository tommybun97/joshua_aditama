import React from "react"
import { findRenderedDOMComponentWithClass } from "react-dom/cjs/react-dom-test-utils.production.min"
import {connect} from "react-redux"

// Action
import {onAddData} from "../Redux/Actions/projectaction" 
import {onGetData} from "../Redux/Actions/projectaction"

class AdminPage extends React.Component{

    state = {
        imageErrorMessage: "",
        images: null
    }

    componentDidMount () {
        this.onGet()
    }

    onSubmit = () => {
        // let token = localStorage.getItem("my-tkn")
        try {
            let title = this.title.value
            let description = this.description.value
            let user_id = 1

            if(!title || !description || !user_id) throw {message:`All data must be filled`}
            if(!this.state.images) throw {message: `Select image`}
            let addData = {
                title : this.title.value,
                description : this.description.value,
                user_id
            }

            let dataToSend = JSON.stringify(addData)

            let fd = new FormData()
            fd.append(`data`, dataToSend)
            for(let i = 0; i< this.state.images.length; i++){
                fd.append(`images`, this.state.images[i])
            }
            console.log([...fd])
            this.props.onAddData(fd)
            window.location = "/adminpage"
        } catch (error) {
            this.setState({imageErrorMessage: error.message})
        }
        

    }

    onGet = () => {
        // let token = localStorage.getItem("my-tkn")

        // let data = {
        //     token : token
        // }
        
        this.props.onGetData()

        
    }

    onImageValidation = (e) =>{
        const files = e.target.files

        try {
            if(files.length > 3) throw {message: `Max select 3 images`}

            for (let i = 0; i<files.length; i++){
                if(files[i].size > 100000 ) throw {message: `${files[i].name} more than 100kb`}
            }

            this.setState({images: files})
        } catch (error) {
            this.setState({imageErrorMessage: error.message})
        }
    }


    render(){
        if(this.props.project.data === null){
            return(
                <div>
                    Loading
                </div>
            )
        }
        return(
            <div className ="container" style={{marginTop:"200px"}}>
                <h2>
                    Add Data
                </h2>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" ref={(e)=> this.title=e} className="form-control" placeholder= "Input Title"/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" ref={(e)=> this.description=e} className="form-control" placeholder= "Input Description"/>
                </div>
                
                <div>
                    <input type="file" ref={(e) => this.files = e} onChange={this.onImageValidation} multiple style={{display: "none"}} />
                    <input type="button" value = "choose File" className="btn btn-success" onClick={() => this.files.click()} />
                </div>
                <br />
                <button type="submit" onClick={() => this. onSubmit()} class="btn btn-primary">Submit</button>

                    <h6 className="mt-1 text-danger">
                        {
                            this.props.project.message
                        }
                    </h6>
                    <div>
                        {
                            this.state.imageErrorMessage
                        }
                    </div>
                <hr />
                <br />

                <br />

                <div>
                    {
                        this.props.project.data?
                        this.props.project.data.map((value,index) => {
                            return(
                                <>
                                <div key={index}>
                                    <h4>
                                        {value.title}
                                    </h4>
                                    <p>
                                        {value.description}
                                    </p>
                                </div>
                                   
                                    {
                                        value.image.map((val,idx) => {
                                            return(
                                                <div key={idx}>
                                                    <img  src={val.image} alt="" className="border" style={{width:"100px"}} />
                                                </div>
                                                    
                                            )
                                        })
                                    }
                                </>
                            )
                        })
                        :
                        null
                    }
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onAddData, onGetData
}

const mapStateToProps = (state) => {
    return{
        project: state.project
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (AdminPage)