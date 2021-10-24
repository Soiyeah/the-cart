
import { Link } from "react-router-dom";
import styled from "styled-components";
import greenDoll from '../assets/green_doll.png'


const Container = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    position: relative;
    flex-direction: column;
`;

const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
    object-fit: cover;
    overflow: auto;
    margin: 20px;
`;

const Info = styled.div`
    padding-top: 10px;
    background-color: #b3b3b3;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    color: #2c2c2c;
`;

const Price = styled.h4`
    color: #4d534f;
    margin: 10px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #4a834a;
    width: 100%;

`;

const Product = ({item}) => {

   
    return (
        <Container>

            <Link to={`/product/${item.id}`}>
            <Image src={greenDoll} alt="green doll" />
            <Info>
                <Title>{item.name}</Title>
                <Price>Rs. {item.price}.00</Price>
                <Button>Add to cart</Button>
            </Info>
            </Link>
            
        </Container>
    )
}

export default Product
