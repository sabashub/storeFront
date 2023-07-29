import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 40px;
    img {
        max-width: 100%;
    }
`;

const Title = styled.h1`
    margin: 0;
    font-weight: normal;
    font-size:3rem;
`;

const Column = styled.div`
    display:flex;
    align-items:center;
    
`;

const ButtonsWrapper = styled.data`
    display:flex;
    gap:10px;
    margin-top:25px;
`;

export default function Featured({product}) {
    const {addProduct} = useContext(CartContext);
    function addFeaturedToCart(){
        addProduct(product._id);
    
    }

    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product?.title}</Title>
                            <Desc>
                                {product?.description}                        
                            </Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/products/'+product?._id} outline={1} white={1}>erad More</ButtonLink>
                                <Button white onClick = {addFeaturedToCart}>
                                    <CartIcon/>
                                    Add to cart
                                </Button>    
                            </ButtonsWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://www.investopedia.com/thmb/vbqJtFiJHnvoqwSpDRgArlgcBDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_Product-Line-Final-58870113a3ca4770a85cabf3549894bb.jpg" alt="" />
                    </Column>
                </ColumnsWrapper>
            </Center>
        </Bg>
    );
}
