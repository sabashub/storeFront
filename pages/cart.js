import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Table from "@/components/Table";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import { styled } from "styled-components";

const ColumnusWrapper = styled.div`
    display:grid;
    grid-template-columns: 1.3fr .7fr;
    gap: 40px;
    margin-top:40px;
`;

const Box = styled.div`
    background-color:#fff;
    border-radius:10px;
    padding:40px;
`;

export default function CartPage(){
    const {cartProducts} = useContext(CartContext);
    const [products,setProducts] = useState([]);
    useEffect(() => {
        if(cartProducts.length > 0){
            axios.post('/api/cart',{ids:cartProducts})
            .then(responce => {
                setProducts(responce.data);
            })
        }
    }, [cartProducts])
    return (
        <>
            <Header/>     
            <Center>
                <ColumnusWrapper>
                    <Box>
                        <h2>cart</h2>
                        {!cartProducts?.length && (
                            <div>cart os empty</div>
                        )}
                        {products?.length > 0 && (
                            <Table>
                                <thead>
                                    <th>Product</th>
                                    <th>Quantiti</th>
                                    <th>price</th>
                                </thead>
                                <tbody>
                                        {products.map(product => (
                                            <tr>
                                                <td>
                                                    <img src={product.images[0]} alt=""/>
                                                    {product.title}
                                                </td>
                                                <td>
                                                    {cartProducts.filter
                                                    (id => id ===product._id).length}
                                                </td>
                                                <td>
                                                    Price
                                                </td>
                                                
                                            </tr>
                                        ))}
                                </tbody>
                            </Table>
                        )}
                    </Box>
                    {!!cartProducts?.length && (
                        <Box>
                            <h2>order Information</h2>
                            <input type="text" placeholder="Adress"/>
                            <input type="text" placeholder="Adress"/>
                            <Button black block>Contineu to payment</Button>
                        </Box>
                    )}
                </ColumnusWrapper>
            </Center>
        </>
    );
}