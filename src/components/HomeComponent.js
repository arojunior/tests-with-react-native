import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Title,
  Text,
  Subtitle
} from 'native-base';

const HomeComponent = ({ onPressBack }) => (
  <Container>
    <Header>
      <Left>
        <Button hasText transparent onPress={onPressBack} testID="back_button">
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
      </Body>
      <Right />
    </Header>
    <Content>
      <Text>Home component</Text>
    </Content>
  </Container>
);

HomeComponent.propTypes = {
  onPressBack: PropTypes.func.isRequired
};

export default HomeComponent;
