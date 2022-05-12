import styled from "styled-components";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { mobile } from "../../Responsive";

const Container = styled.div`
  margin-top: 50px;
  padding: 0px 30px;
  height: 100vh;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: 280px;
  grid-template-areas:
    "Wrapper1 Wrapper2 Wrapper3"
    "Wrapper1 Wrapper4 Wrapper5"
    "Wrapper1 Wrapper4 Wrapper6";
  @media (max-width: 541px) {
    grid-template-columns: 1fr;
    grid-template-rows: 350px 350px 655px 350px;
    grid-gap: 20px;
    grid-template-areas:
      "Wrapper2"
      "Wrapper3"
      "Wrapper4"
      "Wrapper5"
      "Wrapper6";
  }
  ${mobile({ marginTop: "20px" })};
`;

const Wrapper1 = styled.div`
  grid-area: Wrapper1;
  padding: 20px 60px;
  background-color: #f7f9fc;
  ${mobile({ display: " none" })}
`;

const Wrapper2 = styled.div`
  grid-area: Wrapper2;
  background-color: #f7f9fc;
  padding: 40px 60px;
  display: flex;
  justify-content: space-between;
`;

const Wrapper3 = styled.div`
  grid-area: Wrapper3;
  background: url("https://theatticny.com/wp-content/uploads/2020/05/ppngwing.com_.png")
    center center / cover;
  background-color: #f7f9fc;
  display: flex;
  justify-content: center;
`;

const Wrapper4 = styled.div`
  grid-area: Wrapper4;
  height: 40rem;
  padding: 0px 20px;
  background-color: #f7f9fc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper5 = styled.div`
  grid-area: Wrapper5;
  background-color: #f7f9fc;
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper6 = styled.div`
  grid-area: Wrapper6;
  background-color: #f7f9fc;
  padding: 10px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Categories = styled.div`
  line-height: 50px;
`;

const Top = styled.h3``;

const Lines = styled.p`
  color: teal;
  letter-spacing: 3px;
`;

const Home = styled.p`
  display: flex;
  align-items: center;
`;

const Product = styled.p`
  display: flex;
  align-items: center;
`;

const CategoryItem = styled.p`
  display: flex;
  align-items: center;
`;

const AllProducts = styled.p`
  display: flex;
  align-items: center;
`;

const TopCategories = styled.div`
  line-height: 50px;
  font-size: 15px;
`;

const TopText = styled.div`
  margin-top: 50px;
`;

const Shoe = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 14%;
  margin-right: 10px;
`;

const SuitCase = styled.div`
  display: flex;
  align-items: center;
`;

const Jeans = styled.div`
  display: flex;
  align-items: center;
`;

const Lounge = styled.div`
  display: flex;
  align-items: center;
`;

const Shirt = styled.div`
  display: flex;
  align-items: center;
`;

const Belt = styled.div`
  display: flex;
  align-items: center;
`;

const Slippers = styled.div`
  display: flex;
  align-items: center;
`;

const Baby = styled.div`
  display: flex;
  align-items: center;
`;

const ProductsDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  width: 7px;
  color: teal;
  display: flex;
  align-items: center;
`;

const Sale = styled.div`
  line-height: 3rem;
`;

const SaleP = styled.h4``;
const BigSale = styled.h1`
  font-size: 40px;
  letter-spacing: 1px;
  color: teal;
`;
const Percent = styled.h3`
  font-size: 30px;
`;
const ShopNow = styled.a`
  text-decoration: underline;
  margin-left: 20px;
  color: red;
  cursor: pointer;
`;
const Image1 = styled.img`
  width: 35%;
  height: 14rem;
`;

const JeansCollection = styled.div`
  margin-top: 25px;
  line-height: 30px;
`;

const Collection = styled.div``;
const JeansPercent = styled.div`
  font-size: 30px;
  color: teal;
`;

const JeanShop = styled.div`
  text-decoration: underline;
  margin-left: 20px;
  color: red;
  cursor: pointer;
`;

const WinterOffer = styled.div`
  margin-top: 35px;
  line-height: 35px;
`;
const Winter = styled.h4`
  font-size: 20px;
`;

const WinterImg = styled.img`
  width: 80%;
  height: 40rem;
`;
const WinterPercentage = styled.h1`
  font-size: 50px;
  color: teal;
`;
const Kinds = styled.p``;
const WinterShop = styled.a`
  text-decoration: underline;
  margin-left: 20px;
  color: red;
  cursor: pointer;
`;

const ModernFashion = styled.div`
  line-height: 27px;
`;
const BeltImg = styled.img`
  width: 45%;
  height: 13rem;
`;
const Comfort = styled.h4`
  font-size: 12px;
`;
const BeltCollection = styled.h3`
  font-size: 20px;
  color: teal;
`;
const ModernShop = styled.a`
  text-decoration: underline;
  margin-left: 20px;
  color: red;
  cursor: pointer;
`;

const DecemberNew = styled.div`
  line-height: 25px;
`;
const DecemberImg = styled.img`
  width: 48%;
  height: 13rem;
`;
const New = styled.h4`
  font-size: 13px;
`;
const ShoesCollections = styled.h3`
  font-size: 18px;
  color: teal;
`;
const DecemberShop = styled.a`
  text-decoration: underline;
  margin-left: 20px;
  color: red;
  cursor: pointer;
`;

const ShowCase = () => {
  return (
    <Container>
      <Wrapper1>
        <Categories>
          <Top>Categories</Top>
          <Lines>---------------------</Lines>
          <Home>
            <HomeOutlinedIcon
              style={{ marginRight: "20px", fontSize: "17px" }}
            />
            Home
          </Home>
          <Product>
            <ProductionQuantityLimitsOutlinedIcon
              style={{ marginRight: "20px", fontSize: "17px" }}
            />
            Products
          </Product>
          <CategoryItem>
            <CategoryOutlinedIcon
              style={{ marginRight: "20px", fontSize: "17px" }}
            />
            Categories
          </CategoryItem>
          <AllProducts>
            <AutoStoriesOutlinedIcon
              style={{ marginRight: "20px", fontSize: "17px" }}
            />
            All Products
          </AllProducts>
        </Categories>
        <TopCategories>
          <TopText>Top Categories</TopText>
          <Lines>----------------------</Lines>
          <ProductsDiv>
            <Shoe>
              <Img src="https://pucashoes.com/wp-content/uploads/2021/01/RAIDER-BLACK-1.png" />
              Shoe
            </Shoe>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <SuitCase>
              <Img src="https://www.rimowa.com/on/demandware.static/-/Sites-rimowa-master-catalog-final/default/dwbe45875a/images/large/83280654_2.png" />
              Suitcase
            </SuitCase>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <Jeans>
              <Img src="https://www.gant.ae/images/slim-fit-blue-capri-jeans-p3791-33854_image.jpg" />
              Jeans
            </Jeans>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <Lounge>
              <Img src="https://cdn11.bigcommerce.com/s-xhiv8v/images/stencil/500x659/products/242/1264/LOVE_TO_DREAM_SLEEP_SUIT_2.5_TOG_White__00823.1564033669.1280.1280__70282.1617163947.png?c=2" />
              Lounge Wear
            </Lounge>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <Shirt>
              <Img src="https://www.yonex.com/media/catalog/product/1/6/16428_010.png?quality=80&fit=bounds&height=819&width=600&canvas=600:819" />
              T-shirt
            </Shirt>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <Belt>
              <Img src="https://res.cloudinary.com/zinodavidoff/image/upload/c_fill_pad,f_auto,g_auto,h_385,q_auto,w_385/v1/2020-12/23466_DAVIDOFF_PARIS_Belt_Black-Green_Round" />
              Belt
            </Belt>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <Slippers>
              <Img src="https://img.fcbayern.com/image/upload/q_auto,f_auto/w_800,h_1067,c_pad/eCommerce/produkte/23044_1/hausschuhe.png" />
              Slippers
            </Slippers>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
          <ProductsDiv>
            <Baby>
              <Img src="https://post.healthline.com/wp-content/uploads/2021/01/497686-Pact.png" />
              Baby Cloths
            </Baby>
            <Icon>
              <ArrowForwardIosOutlinedIcon style={{ fontSize: "15px" }} />
            </Icon>
          </ProductsDiv>
        </TopCategories>
      </Wrapper1>
      <Wrapper2>
        <Sale>
          <SaleP>Modern Fashion.</SaleP>
          <BigSale>Big Sale</BigSale>
          <Percent>UP TO 50% OFF</Percent>
          <ShopNow>Shop Now</ShopNow>
        </Sale>
        <Image1 src="https://www.seekpng.com/png/full/101-1016696_tt0084-gucci-logo-long-sleeve-t-shirt-gucci.png" />
      </Wrapper2>
      <Wrapper3>
        <JeansCollection>
          <Collection>Jeans Collections.</Collection>
          <JeansPercent>UP TO 60% OFF</JeansPercent>
          <JeanShop>Shop Now</JeanShop>
        </JeansCollection>
      </Wrapper3>
      <Wrapper4>
        <WinterOffer>
          <Winter>Winter Offer!</Winter>
          <WinterPercentage>50% Off</WinterPercentage>
          <Kinds>All Kinds Of Cloths Items</Kinds>
          <WinterShop>Shop Now</WinterShop>
        </WinterOffer>
        <WinterImg src="https://cdn.shopify.com/s/files/1/0051/9212/2417/products/grayslimehoodie.png?v=1578332318" />
      </Wrapper4>
      <Wrapper5>
        <ModernFashion>
          <Comfort>Modern & Comfortable</Comfort>
          <BeltCollection>Belt Collections</BeltCollection>
          <ModernShop>Shop Now</ModernShop>
        </ModernFashion>
        <BeltImg src="https://media2.bulgari.com/f_auto,q_auto/production/dw886fe795/images/images/465579.png" />
      </Wrapper5>
      <Wrapper6>
        <DecemberNew>
          <New>December New!</New>
          <ShoesCollections>Shoes Collections</ShoesCollections>
          <DecemberShop>Shop Now</DecemberShop>
        </DecemberNew>
        <DecemberImg src="https://vegconom.de/vegconomistcom/wp-content/uploads/sites/3/gentleburg.png" />
      </Wrapper6>
    </Container>
  );
};

export default ShowCase;
