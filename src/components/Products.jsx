import styled from "styled-components";
import axios from "axios";
import {useState,useEffect} from 'react';
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = () => {
        axios.get("http://localhost:8080/api/v1/product").then(res =>{
          console.log(res);
          setProducts(res.data);
        })
      }
    
      useEffect(() =>{
        fetchProducts()
      },[])
    

    return (
        <Container>
            {products.map((item) =>(
                <Product item = {item} key = {item.id} />
            ))}
        </Container>
    )
}

export default Products
