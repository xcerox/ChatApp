import React, { PureComponent } from 'react'
import { Text } from 'react-native'
import Chat from './chat'
import { Container, Header, Content, Body, Right, Icon, Title } from 'native-base'
import { logout } from '../../../store/actions/sessionActions'
import { loadMessages } from '../../../store/actions/chatActions'
import { connect } from 'react-redux'

class ChatWrapper extends PureComponent {

  componentDidMount() {
    this.props.loadMessages();
  }

  logOut = () => {
    this.props.logout();
  }

  render() {
    return (
      <Container>
        <Header androidStatusBarColor='#5893d4' style={{ backgroundColor: 'white' }}>
          <Body >
            <Title style={{color: 'black'}}>
              Chat
            </Title>
          </Body>
          <Right >
            <Icon name='log-out' style={{ fontSize: 25, color: 'red' }} onPress={this.logOut} />
          </Right>
        </Header>
        <Content contentContainerStyle={{ flexGrow: 1 }}>
          <Chat {...this.props} />
        </Content>
      </Container>
    )
  }
}

export default connect(null, { logout, loadMessages })(ChatWrapper);