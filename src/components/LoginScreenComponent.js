import React from 'react';
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from 'native-base';
import LoginFormContainer from '../containers/LoginFormContainer';

const LoginScreenComponent = () => (
  <Container>
    <Header>
      <Left>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>Header</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <LoginFormContainer />
    </Content>
    <Footer>
      <FooterTab>
        <Button full>
          <Text>Tests with react-native</Text>
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);

export default LoginScreenComponent;
