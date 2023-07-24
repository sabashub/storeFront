import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";

const Bg = styled.div`
    background-color: #222;
    color: #fff;
    padding: 50px 0;
`;

const Desc = styled.p`
    color: #aaa;
    font-size: 0.8rem;
`;

const Wrapper = styled.div`
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
`;

const Column = styled.div`
    display:flex;
    align-items:center;
    
`;

export default function Featured() {
    return (
        <Bg>
            <Center>
                <Wrapper>
                    <Column>
                        <div>
                            <Title>Pro anywhere</Title>
                            <Desc>
                                dasfa sd fasdf
                                adsf
                                adfadsfffffffffffffffffffffsd  sdfasdf rgaf saf
                                asdf greargada        afgafffffffff
                            </Desc>
                            <Button outline white size='l'>erad More</Button>
                            <Button primary size='l'>Add to cart</Button>
                        </div>
                    </Column>
                    <Column>
                        <img src="https://www.investopedia.com/thmb/vbqJtFiJHnvoqwSpDRgArlgcBDs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Term-Definitions_Product-Line-Final-58870113a3ca4770a85cabf3549894bb.jpg" alt="" />
                    </Column>
                </Wrapper>
            </Center>
        </Bg>
    );
}
