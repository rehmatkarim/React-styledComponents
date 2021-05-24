import React from "react";
import { Wrapper, Title, Button, ButtonWrapper } from "./HomePageElements";
const HomePage = () => {
  return (
    <Wrapper>
      <Title>React Styled Components</Title>
      <ButtonWrapper>
        <Button>Github</Button>
        <Button primary>Documentation</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
export default HomePage;
