import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { mobile } from "../Responsive";

const Container = styled.div`
  margin-top: 3.8rem;
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
  width: 100%;
  height: 19rem;
`;

const Image2 = styled.img`
  width: 100%;
  height: 22rem;
`;

const Image3 = styled.img`
  width: 100%;
  margin-top: 60px;
`;

const DescDiv = styled.div`
  padding: 0px 25px;
  line-height: 60px;
`;

const DescDiv2 = styled.div`
  margin-top: 0.4rem;
  padding: 0px 25px;
  line-height: 60px;
`;

const DescDiv3 = styled.div`
  margin-top: 3rem;
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

const TopSellingProducts = () => {
  return (
    <Container>
      <TopProduct>Top Selling Products</TopProduct>
      <TopP>Get the best discounts, expand your fantasy!</TopP>
      <MiniContainer>
        <Wrapper1>
          <Off>5% off</Off>
          <Img data-testid="wedding dress">
            <Image1 src="https://media.vogue.co.uk/photos/6267ded3838e15dc77ddea0c/master/w_1280%2Cc_limit/dress2604_07.png" />
          </Img>
          <DescDiv>
            <Desc>Wedding Dress</Desc>
            <Circles>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
            </Circles>
            <Prices>
              <Price1>
                $300.00
                <Price2>
                  <Stripe>195.00</Stripe>
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
          <Img data-testid="allstar">
            <Image2 src="https://media1.popsugar-assets.com/files/thumbor/K9Clugv-1vOvEVjEPY1eC1s7G2Q/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/01/31/891/n/1922564/16dc74cce7a94122_netimg8KztXj/i/Pink-Love-Sneakers-Converse-Chuck-Taylor-All-Star-Lift-Platform-Canvas.png" />
          </Img>
          <DescDiv2>
            <Desc>Allstar Sneakers</Desc>
            <Circles>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
            </Circles>
            <Prices>
              <Price1>$115.00</Price1>
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
          <Off>17% off</Off>
          <Img data-testid="patek">
            <Image3 src="http://prod-upp-image-read.ft.com/24f48436-9e07-11e9-b8ce-8b459ed04726" />
          </Img>
          <DescDiv3>
            <Desc>Patek Philippe</Desc>
            <Circles>
              <Circle1 />
              <Circle2 />
              <Circle3 />
              <Circle4 />
            </Circles>
            <Prices>
              <Price1>
                $1,235.00
                <Price2>
                  <Stripe>23.00</Stripe>
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
          </DescDiv3>
        </Wrapper3>
      </MiniContainer>
    </Container>
  );
};

export default TopSellingProducts;
