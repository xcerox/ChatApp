import React from 'react'
import { Text } from 'react-native'
import Chat from './chat'
import { Container, Header, Content, Body, Right, Icon, Button } from 'native-base'
import { logout } from '../../../store/actions/sessionActions'
import { connect } from 'react-redux'

const ChatWrapper = props => {

  const logOut = () => {
    props.logout();
  }

  return (
    <Container>
      <Header androidStatusBarColor='#5893d4' style={{ backgroundColor: 'white' }}>
        <Body >
          <Text style={{ color: 'black', fontSize: 18, }}>
            Chat
          </Text>
        </Body>
        <Right >
          <Icon name='log-out' style={{ fontSize: 25, color: 'red' }} onPress={logOut} />
        </Right>
      </Header>
      <Content contentContainerStyle={{ flexGrow: 1 }}>
        <Chat {...props} />
      </Content>
    </Container>
  )
}

export default connect(null, { logout })(ChatWrapper);