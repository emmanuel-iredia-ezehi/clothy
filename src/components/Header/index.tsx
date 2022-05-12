import styled from "styled-components";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { mobile } from "../../Responsive";

const Container = styled.div`
  color: white;
  height: 90px;
`;

const Wrapper = styled.div`
  padding: 20px 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "15px 15px", marginTop: "20px" })};
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h2`
  font-size: 27px;
  font-style: italic;
  letter-spacing: 3px;
  color: teal;
  display: flex;
  align-items: center;
  ${mobile({ fontSize: "25px", display: "none" })};
`;

const Center = styled.div``;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 100px;
  ${mobile({ marginLeft: "15px" })};
`;

const Input = styled.input`
  width: 30rem;
  padding: 0px 40px;
  height: 45px;
  border: 1px solid black;
  border-radius: 25px 0 0 25px;
  ${mobile({ width: "100%" })};
`;

const Button = styled.button`
  color: white;
  background-color: teal;
  width: 110px;
  border: none;
  border-radius: 0 25px 25px 0;
  ${mobile({ width: "40%" })};
`;

const Right = styled.div``;

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo data-testid="logo">EMMA</Logo>
        </Left>
        <Center>
          <SearchContainer>
            <SearchOutlinedIcon
              data-testid="search"
              style={{
                position: "absolute",
                color: "black",
                margin: "0px 15px",
              }}
            />
            <Input placeholder="Searching for..." />
            <Button style={{ height: "46px" }}>Search</Button>
          </SearchContainer>
        </Center>
        <Right>
          <PermIdentityOutlinedIcon
            style={{
              margin: "0px 35px",
              borderRadius: "50%",
              fontSize: "30px",
              backgroundColor: "#E6EBF7",
              color: "black",
              padding: "4px",
            }}
          />
          <ShoppingBagOutlinedIcon
            style={{
              borderRadius: "50%",
              fontSize: "31px",
              backgroundColor: "#E6EBF7",
              color: "black",
              padding: "6px",
            }}
          />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
