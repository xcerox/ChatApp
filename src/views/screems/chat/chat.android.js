import React, { PureComponent } from 'react'
import { View } from 'react-native'
import ChatView from './chatView'
import ChatInput from './chatInput'
import { chat } from '../../styles/style'
import translations from '../../../i18n'

class Chat extends PureComponent {
  
  static navigationOptions = {
    title: translations.t('chat')
  }

  render() {
    return (
      <View style={chat.generalContainer}>
        <ChatView />
        <ChatInput />
      </View >
    )
  }

}

export default Chat;