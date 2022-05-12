import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../../Responsive";

const Container = styled.div`
  margin-top: 17rem;
  ${mobile({ marginTop: "88rem" })};
`;

const MiniContainer = styled.div`
  padding: 0px 90px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 540px;
  grid-template-areas: "Wrapper1 Wrapper2 Wrapper3";
  @media (max-width: 541px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 540px;
    grid-gap: 20px;
    grid-template-areas:
      "Wrapper1"
      "Wrapper2"
      "Wrapper3";
  }
`;

const Wrapper1 = styled.div`
  grid-area: Wrapper1;
  border: 3px solid #f7f9fc;
  margin-top: 40px;
  background-image: linear-gradient(
    to bottom,
    #f7f9fc 0%,
    #f7f9fc 50%,
    white 50%,
    white 100%
  );
`;

const Wrapper2 = styled.div`
  grid-area: Wrapper2;
  margin-top: 40px;
  border: 3px solid #f7f9fc;
  background-image: linear-gradient(
    to bottom,
    #f7f9fc 0%,
    #f7f9fc 50%,
    white 50%,
    white 100%
  );
`;

const Wrapper3 = styled.div`
  grid-area: Wrapper3;
  margin-top: 40px;
  border: 3px solid #f7f9fc;
  background-image: linear-gradient(
    to bottom,
    #f7f9fc 0%,
    #f7f9fc 50%,
    white 50%,
    white 100%
  );
`;

const TopProduct = styled.h2`
  margin-left: 90px;
  ${mobile({ marginLeft: "30px" })};
`;

const TopP = styled.p`
  margin-left: 90px;
  padding-top: 15px;
  color: gray;
  ${mobile({ marginLeft: "30px" })};
`;

const Img = styled.div`
  display: flex;
  justify-content: center;
`;
const Off = styled.h5`
  margin-top: 30px;
  height: 24px;
  width: 17%;
  color: white;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image1 = styled.img`
  width: 80%;
  margin-top: 70px;
`;

const Image2 = styled.img`
  width: 85%;
`;

const Image3 = styled.img`
  width: 85%;
  margin-top: 60px;
`;

const DescDiv = styled.div`
  margin-top: 5rem;
  padding: 0px 25px;
  line-height: 60px;
`;

const DescDiv2 = styled.div`
  margin-top: 0.4rem;
  padding: 0px 25px;
  line-height: 60px;
`;

const DescDiv3 = styled.div`
  padding: 0px 25px;
  line-height: 60px;
`;

const Desc = styled.h2``;

const Circles = styled.div`
  display: flex;
`;

const Circle1 = styled.span`
  border-radius: 50%;
  margin-right: 10px;
  width: 3%;
  height: 10px;
  background-color: #ffc300;
`;

const Circle2 = styled.span`
  border-radius: 50%;
  margin-right: 10px;
  width: 3%;
  height: 10px;
  background-color: #5c99f5;
`;

const Stripe = styled.s`
  color: gray;
`;

const Circle3 = styled.span`
  border-radius: 50%;
  margin-right: 10px;
  width: 3%;
  height: 10px;
  background-color: #8df9ab;
`;
const Circle4 = styled.span`
  border-radius: 50%;
  margin-right: 10px;
  width: 3%;
  height: 10px;
  background-color: #f98db8;
`;

const Prices = styled.div`
  font-size: 12px;
  display: flex;
  justify-content: space-between;
`;
const Price1 = styled.div`
  color: teal;
`;
const Price2 = styled.span`
  margin-left: 30px;
  color: black;
`;

const TopNewProducts = () => {
  return (
    <Container>
      <TopProduct>Top New Products</TopProduct>
      <TopP>Get the best discounts, expand your fantasy!</TopP>
      <MiniContainer>
        <Wrapper1>
          <Off>20% off</Off>
          <Img data-testid="slipper">
            <Image1 src="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F54e67955-0b0c-4015-b096-2889fbb1128c.png?fit=scale-down&source=next&width=700" />
          </Img>
          <DescDiv>
            <Desc>Comfortable Slipper</Desc>
            <Circles>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
            </Circles>
            <Prices>
              <Price1>
                $120.00
                <Price2>
                  <Stripe>150.00</Stripe>
                </Price2>
              </Price1>
              <AddIcon
                style={{
                  border: "1px solid teal",
                  color: "teal",
                  marginTop: "17px",
                }}
              />
            </Prices>
          </DescDiv>
        </Wrapper1>
        <Wrapper2>
          <Off>5% off</Off>
          <Img data-testid="suitcase">
            <Image2 src="https://cdn.shopify.com/s/files/1/0258/1944/7377/products/KabutoGallivanterBlueSilver.png?v=1643651698" />
          </Img>
          <DescDiv2>
            <Desc>Best Suitcase</Desc>
            <Circles>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
            </Circles>
            <Prices>
              <Price1>
                $180.00
                <Price2>
                  <Stripe>265.00</Stripe>
                </Price2>
              </Price1>
              <AddIcon
                style={{
                  border: "1px solid teal",
                  color: "teal",
                  marginTop: "17px",
                }}
              />
            </Prices>
          </DescDiv2>
        </Wrapper2>
        <Wrapper3>
          <Img data-testid="baby clothes">
            <Image3 src="https://images.ctfassets.net/50gzycvace50/ee20c5f8f66c6da57cd5e29c2a595e0337913c51ea1dfbc248d9895f2819874a/286b3693ba85b064d6fb7ebc8c403cd5/LY11172_SUN_MAIN.png" />
          </Img>
          <DescDiv3>
            <Desc>Quality Baby Clothes</Desc>
            <Circles>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
            </Circles>
            <Prices>
              <Price1>$110.00</Price1>
              <AddIcon
                style={{
                  border: "1px solid teal",
                  color: "teal",
                  marginTop: "17px",
                }}
              />
            </Prices>
          </DescDiv3>
        </Wrapper3>
      </MiniContainer>
    </Container>
  );
};

export default TopNewProducts;
