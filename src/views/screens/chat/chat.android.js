import React from 'react'
import { View, ImageBackground } from 'react-native'
import ChatView from './chatView'
import ChatInput from './chatInput'
import { chat } from '../../styles/style'
import backgroundChat from '../../../assets/images/backgroundChat.jpg'

const Chat = props => (
  <View style={chat.generalContainer}>
    <ImageBackground source={backgroundChat} resizeMode='cover' style={chat.backgroundImage}>
      <View style={chat.backgroundImageOverlay}>
        <ChatView />
        <ChatInput />
      </View>
    </ImageBackground>
  </View >
)

export default Chat;