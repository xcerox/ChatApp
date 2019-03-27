import React from 'react'
import { KeyboardAvoidingView, ImageBackground, View } from 'react-native'
import ChatView from './chatView'
import ChatInput from './chatInput';
import { chat } from '../../styles/style'
import backgroundChat from '../../../assets/images/backgroundChat.jpg'

const Chat = props => (
  <View style={chat.generalContainer}>
    <ImageBackground source={backgroundChat} resizeMode='cover' style={chat.backgroundImage}>
      <KeyboardAvoidingView
        style={chat.backgroundImageOverlay}
        behavior='padding'
        keyboardVerticalOffset={64}>
        <ChatView />
        <ChatInput />
      </KeyboardAvoidingView>
    </ImageBackground>
  </View>

)

export default Chat;