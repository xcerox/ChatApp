import React, { PureComponent } from 'react'
import { View, ImageBackground } from 'react-native'
import ChatView from './chatView'
import ChatInput from './chatInput'
import { chat } from '../../styles/style'
import translations from '../../../i18n'
import backgroundChat from '../../../assets/images/backgroundChat.jpg';

class Chat extends PureComponent {

  static navigationOptions = {
    title: translations.t('chat')
  }

  render() {

    return (
      <View style={chat.generalContainer}>
        <ImageBackground source={backgroundChat} resizeMode='cover' style={chat.backgroundImage}>
          <View style={chat.backgroundImageOverlay}>
            <ChatView />
            <ChatInput />
          </View>
        </ImageBackground>
      </View >
    )
  }

}

export default Chat;