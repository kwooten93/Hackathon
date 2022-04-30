//POST form
import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

const PostRequest = () => {
    //setting initial state
    const [state, setState] = useState({
        name: "",
        price: 0,
        amount: 0,
    });
    //handle setting state
    const handleChange = (e) => {
        //e.target.value contains new input from onChange
        
        setState({
            ...state,
            [e.target.name]: [e.target.value]
        });
    };
//when submit button is pressed
    const handleSubmit = (e) => {
        e.preventDefault();
        const itemAdd = {
            name: state.name,
            price : state.price,
            amount: state.amount
        };
        axios.post("http://localhost:5000/", itemAdd)
        .then((res) => {
            console.log(res);
        }).catch((error) =>{
            console.log(error)
        });
    };
    return(
        <div className="wrapper">
        <h1>Add Item</h1>
        <form >
            <div className="form-group">
                <label htmlFor="name">
                Name </label>
                    <input 
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                            
                <label htmlFor="price">
                    Price </label>
                    <input 
                        type="currency"
                        name="price"
                        value={state.price}
                        onChange={handleChange}
                        className="form-control"
                    />
                <label htmlFor="amount">
                    Quantity </label>
                    <input 
                        type="number"
                        name="amount"
                        value={state.amount}
                        onChange={handleChange}
                    />
                
            </div>
            <div className='button'>
            <Button type="submit"  onClick={handleSubmit} >Add Item</Button>
            </div>
        </form>
        
        </div>
    )
    
}

export default PostRequest;

