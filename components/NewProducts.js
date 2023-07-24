import { styled } from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductGrid = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:30px;
    padding-top:30px;
`;

const Title = styled.h2`
    font-size:2rem;
    margin:30px 0 20px;
    font-weight:500;
`;

export default function NewProducts({products}){
    return (
        <Center>
            <h2>New Arrivals</h2>
            <ProductGrid>
                {products?.length > 0 &&
                products.map(product =>(
                    <ProductBox {...product}></ProductBox>
                ))
                }
            </ProductGrid>
        </Center>
    );
}