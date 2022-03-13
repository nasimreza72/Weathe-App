import { useRef } from "react"
import {useContext} from "react";
import { userContext } from "../Context/Context.jsx";


function Input(props){

    const { setCityName} =useContext(userContext)

    
    const input = useRef()
    

    const submitHandler = (e)=>{
        e.preventDefault()
        setCityName(input.current.value)
        input.current.value = ""
    }
    
    return (

        <div className="inputButton">
            <form onSubmit={submitHandler}>
                <input placeholder=" search city..." type="text" ref={input}   />
                <button onClick={submitHandler}>search</button>
            </form>
        </div>
        )


}
export default Input