import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";



function Archive(){
    const {location} = useContext(userContext)

    return(
        <div>
            <span style={{fontSize:'1.5rem', fontWeight: 'bold'}}>{location}</span> <hr/>

            <div>coming soon..........</div>
        </div>
        
    )
}
export default Archive