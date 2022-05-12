import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
`;

const SideBar = styled.div``;

const MainContent = styled.div``;

const Layout = () => {
  return (
    <Grid data-testid="homepage-layout">
      <SideBar data-testid="sidebar"></SideBar>
      <MainContent data-testid="main-content"></MainContent>
    </Grid>
  );
};

export default Layout;
