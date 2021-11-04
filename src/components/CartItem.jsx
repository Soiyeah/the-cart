import styled from 'styled-components';
import { Colors } from '../helper/Colors';
import { useDispatch } from "react-redux";
import { updateQuantity, removeProduct } from '../redux/cartRedux';
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

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

const QuantitySelector = styled.div`
    display: flex;
`;

const CartItem = ({ product }) => {

    const dispatch = useDispatch();
    // let [quantity, setQuantity] = useState(product.quantity);
    let quantity = product.quantity


    const handleQuantity = (type) => {

        if (type === "dec" && quantity > 1) {
            quantity = quantity - 1;
            dispatch(updateQuantity({ ...product, quantity, type }));

        } else if (type === "inc" && quantity < product.availableQty) {
            quantity = quantity + 1;
            dispatch(updateQuantity({ ...product, quantity, type }));
        }
        return quantity;
    };

    const handleRemoveFromCart = () => {
        dispatch(
            removeProduct({ ...product })
        );
    };

    return (
        <Item>
            <ProductImage src={product.imageUrl} />
            <ProductDetails>
                <Link to={`/product/${product.id}`}>
                    <ProductDetail> <h3> {product.name} </h3> </ProductDetail>
                </Link>
                <ProductDetail> Quantity: {product.quantity}</ProductDetail>
                <ProductDetail>Price: {product.price}</ProductDetail>
                <ProductDetail>product total: {product.quantity * product.price} </ProductDetail>

                <QuantitySelector>
                    <Button onClick={() => handleQuantity("dec")}> - </Button>
                    <p>{quantity}</p>
                    <Button onClick={() => handleQuantity("inc")}> + </Button>
                </QuantitySelector>

                <Button onClick={handleRemoveFromCart} >Remove</Button>
            </ProductDetails>
        </Item>
    )
}

export default CartItem
