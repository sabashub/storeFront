import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import ButtonLink from "./ButtonLink";

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
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.tiyle}</Title>
                            <Desc>
                                {product.description}                        </Desc>
                            <ButtonsWrapper>
                                <ButtonLink href={'/products/'+product._id} outline={1} white={1}>erad More</ButtonLink>
                                <Button primary>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                    </svg>
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
