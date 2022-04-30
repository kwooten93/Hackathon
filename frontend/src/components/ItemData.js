// GET items

import Axios from "axios";
import { useEffect, useState } from "react";
import { Table} from 'reactstrap';


export default function GetItems(){
    const [items, setItems] = useState([]);
    //useEffect tells the component it needs to do something after render 
    useEffect(() => {
        Axios.get("http://localhost:5000/")
        .then(res => {
        
        setItems(res.data)} )
        .catch(err => console.log(err), [])
    })

        const arr = items.map((items) => {
            return (
                <tbody>
                    <tr>
                        <td>{items.name}</td>
                        <td>{items.price}</td>
                        <td>{items.amount}</td>
                        
                    </tr>
                </tbody>
            )
        })

        return(
            <div>
            
            <h1 className="invHead">Current Inventory</h1>
                <Table >
                
            <thead>
                <tr>
                    
                    <th>
                        Name
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Quantity
                    </th>
            
                </tr>
            </thead>
            {arr}
            
            
        </Table>
            </div>
        )
}

