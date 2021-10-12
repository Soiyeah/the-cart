import React, {useState,useEffect} from 'react';
import axios from 'axios'


const Customers = () => {

    const [customers, setCustomers] = useState([])

    const fetchCustomers = () => {
        axios.get("http://localhost:8080/api/v1/customer").then(res =>{
          console.log(res);
          setCustomers(res.data);
        })
      }
    
      useEffect(() =>{
        fetchCustomers()
      },[])
    

    return customers.map((customers,index) => {
        return (
            <div key={index}>
                <h1>{customers.name}</h1>
                <h2>{customers.email}</h2>
            </div>
        )
    })
}

export default Customers
