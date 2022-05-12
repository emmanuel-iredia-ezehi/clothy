import styled from "styled-components";
import { mobile } from "../../Responsive";

const Container = styled.div`
  postion: relative;
  color: white;
  width: 100vw;
  height: 40rem;
  background: rgba(0, 0, 0, 0.6)
    url("https://images.unsplash.com/photo-1570857502809-08184874388e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym91dGlxdWV8ZW58MHx8MHx8&w=1000&q=80")
    no-repeat center center / cover;
  background-blend-mode: darken;
`;

const Wrapper = styled.div``;

const SmallText = styled.h4`
  position: absolute;
  padding: 150px 400px;
  font-weight: 900;
  ${mobile({ fontSize: "15px", padding: "150px 100px" })};
`;

const BigText = styled.h1`
  position: absolute;
  padding: 170px 280px;
  font-size: 60px;
  ${mobile({ fontSize: "30px", padding: "170px 100px" })};
`;

const ParagraphText = styled.p`
  position: absolute;
  padding: 250px 250px;
  display: flex;
  width: 80%;
  ${mobile({ fontSize: "13px", padding: "220px 100px", width: "100%" })};
`;

const Button = styled.button`
  margin: 440px 250px;
  width: 105px;
  height: 50px;
  color: white;
  background-color: teal;
  border: none;
  cursor: pointer;
  position: relative;
  ${mobile({ margin: "400px 100px" })};
`;

const Advert = () => {
  return (
    <Container>
      <Wrapper>
        <SmallText>A Beautiful Wardrobe_</SmallText>
        <BigText>Modern Fashion.</BigText>
        <ParagraphText>
          We all need some fashion inspiration to accept ourselves and dress up
          in clothes that express our personality. And sometimes, we lose track
          of it all and could do with little reminders. Fashion is a powerful
          and apparent form of personal expression. The items of clothing you
          chose to wear say a lot about what type of person you are and what you
          think of yourself. Fashion makes life more beautiful. It allows people
          of all kinds to look their best and feel good about themselves.
        </ParagraphText>
        <Button data-testid="shop now">Shop Now</Button>
      </Wrapper>
    </Container>
  );
};

export default Advert;
