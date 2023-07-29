import Button from "@/components/Button";
import Center from "@/components/Center";
import Header from "@/components/Header";
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
    return (
        <>
            <Header/>     
            <Center>
                <ColumnusWrapper>
                    <Box>1</Box>
                    <Box>
                        <h2>order Information</h2>
                        <input type="text" placeholder="Adress"/>
                        <input type="text" placeholder="Adress"/>
                        <Button black block>Contineu to payment</Button>
                    </Box>
                </ColumnusWrapper>
            </Center>
        </>
    );
}