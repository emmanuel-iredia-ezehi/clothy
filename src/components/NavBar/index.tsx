import styled from "styled-components";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { mobile } from "../../Responsive";

const Container = styled.div`
  width: 100%;
  height: 40px;
  color: lightgray;
  position: relative;
  background-color: #051b4f;
  ${mobile({ display: "none" })};
`;

const Wrapper = styled.div`
  padding: 10px 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const PhoneNumber = styled.span`
  margin 0px 11px;
  font-size: 15px;
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
`;

const Email = styled.div`
  display: flex;
  margin: 0px 20px;
  font-size: 1px;
`;

const Address = styled.span`
  margin: 0px 11px;
  font-size: 15px;
`;

const Right = styled.div``;

const UlList = styled.ul`
  list-style: none;
  display: flex;
`;
const List = styled.li`
  padding: 0px 15px;
  font-size: 13px;
  cursor: pointer;
`;

const Select = styled.select`
  font-size: 11px;
  margin: 0px 15px;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Option = styled.option``;

const NavBar = () => {
  return (
    <Container data-testid="header">
      <Wrapper>
        <Left>
          <Phone>
            <LocalPhoneOutlinedIcon style={{ fontSize: "20px" }} />
            <PhoneNumber data-testid="number">+8801234567894</PhoneNumber>
          </Phone>
          <Email>
            <EmailOutlinedIcon style={{ fontSize: "20px" }} />
            <Address data-testid="email">support@ui-ib.com</Address>
          </Email>
        </Left>
        <Right>
          <UlList data-testid="links">
            <List>Theme FAQ's</List>
            <List>Need Help?</List>
            <Select>
              <Option>EN</Option>
            </Select>

            <Select>
              <Option>USD</Option>
            </Select>
          </UlList>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
