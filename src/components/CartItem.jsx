import React from 'react'
import styled from 'styled-components';
import { Colors } from '../helper/Colors';
import { useDispatch } from "react-redux";
import { removeProduct } from '../redux/cartRedux';
import { Button } from '@material-ui/core';

const ProductImage = styled.img`
    flex: 1;
    max-width: 150px;
    max-height: 150px;
`;

const ProductDetails = styled.div`
    padding: 5px;
    margin-left: 10px;
    flex: 4;
`;


const Item = styled.div`
    display: flex;
    width: auto;
    margin: 10px;
    padding: 10px;

    border: ${Colors.lightGray} solid 1px;
`;

const ProductDetail = styled.div`
    color: black;
`;


const CartItem = ({ product }) => {

    const dispatch = useDispatch();

    const handleRemoveFromCart = () => {
        dispatch(
            removeProduct({ ...product })
        );
    };

    return (
        <Item>
            <ProductImage src={product.imageUrl} />
            <ProductDetails>
                <ProductDetail> <h3> {product.name} </h3> </ProductDetail>
                <ProductDetail> Quantity: {product.quantity}</ProductDetail>
                <ProductDetail>Price: {product.price}</ProductDetail>
                <ProductDetail>product total: {product.quantity * product.price} </ProductDetail>
                <Button onClick={handleRemoveFromCart} >Remove</Button>
            </ProductDetails>
        </Item>
    )
}

export default CartItem
