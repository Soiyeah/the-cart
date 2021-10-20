import React from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { Colors } from '../helper/Colors';
import { useSelector } from 'react-redux';

const Container = styled.div`
    height: 60px;
    background-color: ${Colors.primary};
    color: ${Colors.white};
    padding: 3% 10%;
`
const Wrapper = styled.div`
    /* padding: 10px 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Left = styled.div` 
    flex : 1;
`;

const Logo = styled.h3`
    font-weight: 800;
    font-size: 22px;
`

const Right = styled.div`
    flex : 1; 
    display: flex;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    cursor: pointer;
    margin-left: 10%;
`;

const Navbar = () => {

    const cartQuantity = useSelector(state => state.cart.cartQuantity);

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Dear Molly,</Logo>
                </Left>
        
                <Right>

                    <MenuItem>Home</MenuItem>
                    <MenuItem>Shop</MenuItem>
                    <MenuItem>About us</MenuItem>

                    <Link to="/cart">
                        <MenuItem >
                            <Badge badgeContent={cartQuantity} color="primary">
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
