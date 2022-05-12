import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { mobile } from "../Responsive";

const Container = styled.div`
  padding: 50px 120px;
  margin-top: 3rem;
  background-color: teal;
  height: 27rem;
  ${mobile({ padding: "50px 50px", height: "30rem" })};
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Logo = styled.h2`
  font-size: 27px;
  font-style: italic;
  letter-spacing: 3px;
  color: white;
`;
const AppStore = styled.div`
  line-height: 1.5rem;
  margin-top: 25px;
`;
const Apparagraph = styled.p`
  width: 45%;
  color: #e8cfd9;
  ${mobile({ width: "90%" })};
`;
const Stores = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
`;

const Image1 = styled.img`
  width: 13%;
  height: 60px;
  margin-right: 30px;
  ${mobile({ width: "30%" })};
`;
const Image2 = styled.img`
  width: 13%;
  height: 90px;
  ${mobile({ width: "30%" })};
`;

const Ohter = styled.div`
  margin-top: 27px;
  color: #e8cfd9;
  width: 45%;
  line-height: 1.9rem;
`;
const P1 = styled.p`
  ${mobile({ display: "none" })};
`;
const P2 = styled.p`
  ${mobile({ display: "none" })};
`;
const P3 = styled.p`
  ${mobile({ display: "none" })};
`;
const P4 = styled.p`
  ${mobile({ display: "none" })};
`;

const Icons = styled.div`
  margin-top: 25px;
`;

const Footer = () => {
  return (
    <Container data-testid="footer">
      <Logo>EMMA</Logo>
      <Wrapper>
        <AppStore>
          <Apparagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, accusantium dolor, adipisci dicta non ipsam deleniti
            dignissimos placeat exercitationem culpa, libero voluptates beatae
            est expedita sunt atque! Nesciunt illum magni aspernatur deleniti
            reiciendis. Ipsam nam neque veniam aut voluptatem ratione totam odio
            cumque nostrum temporibus.
          </Apparagraph>
          <Stores>
            <Image1 src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png" />
            <Image2 src="https://servicesdown.com/img/app-store-logo.png" />
          </Stores>
        </AppStore>
        <Ohter>
          <P1>Help Center</P1>
          <P2>Track your Order</P2>
          <P3>Corporate And Bulk Purchasing</P3>
          <P4>Returns And Refunds</P4>
          <Icons>
            <FacebookOutlinedIcon
              style={{
                marginRight: "15px",
                borderRadius: "50%",
                fontSize: " 30px",
                padding: "3px",
                backgroundColor: "gray",
              }}
            />
            <InstagramIcon
              style={{
                marginRight: "15px",
                borderRadius: "50%",
                fontSize: " 30px",
                padding: "3px",
                backgroundColor: "gray",
              }}
            />
            <TwitterIcon
              style={{
                marginRight: "15px",
                borderRadius: "50%",
                fontSize: " 30px",
                padding: "3px",
                backgroundColor: "gray",
              }}
            />
            <GoogleIcon
              style={{
                borderRadius: "50%",
                fontSize: " 27px",
                padding: "3px",
                backgroundColor: "gray",
              }}
            />
          </Icons>
        </Ohter>
      </Wrapper>
    </Container>
  );
};

export default Footer;
