import styled from "styled-components";
import {Colors} from "../helper/Colors.js";

const Container = styled.div`
    background-color: ${Colors.primary};
    color: ${Colors.white};
    height: 500px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    line-height: 1.1;
`;

const CTA = styled.div`
    flex: 1;
    margin-left: 10%;

`;

const Title = styled.h1`
    font-size: 64px;
`;

const SubTitle = styled.p`
    font-size: 18px;
    margin-top: 30px;

`;

const Image = styled.div`
    flex: 1;
    width: 40%;
    
`;

const Hero = () => {
    return (
        <Container>
            <CTA>
                <Title>Plushies that everyone loves</Title>
                <SubTitle>handmade with linen for extra comfort</SubTitle>
            </CTA>
            <Image />
            
        </Container>
    )
}

export default Hero
