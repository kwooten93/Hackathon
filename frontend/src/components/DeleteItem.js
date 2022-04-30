//not used

import axios from "axios";
import {useState} from "react";
const DeleteRequest = () => {
    //setting initial state
    const [state, setState] = useState({});
    //handle setting state
    const handleChange = (e) => {
        //e.target.value contains new input from onChange
        
        setState({
            ...state,
            [e.target.name]: [e.target.value]
        });
    };
    
        const deleteItem = (id, ) => {
        axios.delete(`http://localhost:5000/${id}`)
        .then((res) => {
            console.log(res);
        }).catch((error) =>{
            console.log(error)
        });
    };
    return(
        <div>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default DeleteRequest;
