import { publicRequest } from "../helper/RequestMethods";
import { useLocation } from "react-router-dom";
import {useState,useEffect} from 'react';
import styled from "styled-components";
import { Colors } from "../helper/Colors";
import Navbar from "../components/Navbar";
import { Button } from "@material-ui/core";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const Wrapper = styled.div`
    border: ${Colors.lightGray} 1px solid;
    border-radius: 10px;
    display: flex;
    margin: 5%;
`;

const ImagesPane = styled.div`
    width: 50%;
    flex: 1;
`;

const Image = styled.img`
    width: auto;
`;

const DetailsPane = styled.div`
    width: 50%;
    flex: 1;
`;

const QuantitySelector = styled.div`
    display: flex;
`;

const ProductPage = () => {

    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    

      useEffect(() =>{
        const fetchProduct = () => {
            publicRequest.get("product/"+id).then(res =>{
              console.log(res);
              setProduct(res.data);
            })
          };

        fetchProduct();
      },[id])

    
    const handleQuantity = (type) => {
        
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            quantity < product.availableQty ? setQuantity(quantity + 1) :
            console.log("Not enough stock!");
            
        }
        return quantity;
    };
    
    
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <ImagesPane>
                    <Image src={product.imageUrl} alt="Product Image" />
                </ImagesPane>
                <DetailsPane>
                    <h1>{product.name}</h1>
                    <p>{product.productCode}</p>
                    <p>{product.description}</p>
                    <p>{product.availableQty}</p>
                    <h2>Rs. {product.price}</h2>

                    <QuantitySelector>
                        <Button onClick={() => handleQuantity("dec")}> - </Button>
                        <p>{quantity}</p>
                        <Button onClick={() => handleQuantity("inc")}> + </Button>
                    </QuantitySelector>

                    <Button>Add to cart</Button>
                    
                </DetailsPane>


            </Wrapper>
        </Container>
    )
}

export default ProductPage;
