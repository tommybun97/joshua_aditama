import axios from "axios"

export const onUserLogin = (data) => {
    return(dispatch) => {
        dispatch({
            type: `LOADING`
        })
        axios.post(`http://localhost:4000/user-system/login`,data)
        .then((res) => {
            console.log(res.data)
            if(res.data.error === false){

                localStorage.setItem("my-tkn", res.data.data.token)
                dispatch({
                    type: `USER_SUCCESS`,
                    payload: res.data.message
                })
            }else{
                dispatch({
                    type:`USER_ERROR`,
                    payload:res.data.message
                })
            }
        })
        .catch((err)=>{
            console.log(err)
            dispatch({
                type: `USER_ERROR`,
                payload: err.response.data.message
            })
        })
    }
}

export const onSubmitMessage = (name, email, contact, letter) => {
    return(dispatch) => {
        // dispatch(
        //     {
        //         type: `LOADING`
        //     }
        // )
        axios.post(`http://localhost:4000/user-system/send-email`, {name: name, email: email, contact: contact, letter: letter})
        .then((res) => {
            console.log(res)
            dispatch(
                {
                    type: `MESSAGE_SUCCESS`,
                    payload: res.data.message
                }
            )
        })
        .catch((err) => {
            
            dispatch(
                {
                    type: `MESSAGE_ERROR`,
                    payload:err.data.message
                }
            )
        })
    }
    
}