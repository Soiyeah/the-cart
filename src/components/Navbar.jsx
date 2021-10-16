import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Colors } from './Colors';

const Container = styled.div`
    height: 60px;
    background-color: ${Colors.primary};
    color: ${Colors.white};
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Left = styled.div` 
    flex : 1;
`;

const Center = styled.div`
    flex : 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`

const Right = styled.div`
    flex : 1; 
    display: flex;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 25px;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>Left</Left>
                <Center>
                    <Logo>A.</Logo>
                </Center>
                <Right>

                    <MenuItem>ABOUT US</MenuItem>
                    <MenuItem>CONTACT</MenuItem>

                    <Link to="/cart">
                        <MenuItem >
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
