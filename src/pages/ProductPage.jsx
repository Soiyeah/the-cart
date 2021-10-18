import { publicRequest } from "../helper/RequestMethods";
import { useLocation } from "react-router-dom";
import {useState,useEffect} from 'react';
import styled from "styled-components";
import { Colors } from "../helper/Colors";
import Navbar from "../components/Navbar";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    border: ${Colors.lightGray} 1px solid;
    border-radius: 10px;
    display: flex;
    margin: 10%;
`;

const ImagesPane = styled.div`
    width: 50%;
    flex: 1;
`;

const DetailsPane = styled.div`
    width: 50%;
    flex: 1;
`;

const ProductPage = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);
    
      useEffect(() =>{

        const fetchProduct = () => {
            publicRequest.get("product/"+id).then(res =>{
              console.log(res);
              setProduct(res.data);
            })
          };

        fetchProduct();
      },[id])

    return (

        <Container>

            <Navbar />

            <Wrapper>
                <ImagesPane>
                    <h2>Image comes here</h2>
                </ImagesPane>
                <DetailsPane>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <h2>{product.price}</h2>
                </DetailsPane>
            </Wrapper>
        </Container>
    )
}

export default ProductPage;
