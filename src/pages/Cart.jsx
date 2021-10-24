import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Colors } from '../helper/Colors';
import CartItem from '../components/CartItem';
import { Button } from '@material-ui/core';
import { removeAllProducts } from '../redux/cartRedux';


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

const CartItems = styled.div`
    flex: 2;

`;

const OrderSummary = styled.div`
    flex: 1;
    align-items: center;
`;

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(
            removeAllProducts()
        );
    };

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <CartItems>
                    {cart.products.map((product) =>
                        <CartItem product={product} key={product.id} />
                    )}
                    <Button onClick={handleClearCart}>Clear cart</Button>
                </CartItems>
                <OrderSummary>
                    <h1>Order Summary</h1>
                    <h2>Total: {cart.total}</h2>
                </OrderSummary>
            </Wrapper>
        </Container>
    )
}

export default Cart
