import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 20px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: #d3d3d3; */
    border-radius: 3px;
    position: relative;
    flex-direction: column;
`;

const Image = styled.img`
    max-width: 90%;
    max-height: 90%;
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
            <Image src="https://png2.cleanpng.com/dy/c7ffba507938bae9043b9ee75e5aa332/L0KzQYm3UcI5N6NqfZH0aYP2gLBuTgNpaZ51h9G2YnB3hL3sTfNwdaF6jNd7LXbsfLa0lvVkfJD3ReJqaX73dbW0kBhidaF0h59CYYTogn7pjCR1dJZ4RadqNnW6RIKCgcI6PZM3Rqc9MEi6QYeAUcUyP2I9UKM7MUa5RnB3jvc=/kisspng-shampoo-bottle-computer-file-vector-painted-shampoo-water-bottles-5a6e7419a295b2.540871671517188121666.png" alt="bear" />
            <Info>
                <Title>{item.name}</Title>
                <Price>Rs. {item.price}.00</Price>
                <Button>Add to cart</Button>
            </Info>
            
            
        </Container>
    )
}

export default Product
