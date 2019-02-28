import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import ChatView from './chatView'
import ChatInput from './chatInput';

const Chat = props => (
  <KeyboardAvoidingView
    style={{}}
    behavior='padding'
    keyboardVerticalOffset={64}>

    <ChatView />
    <ChatInput />
  </KeyboardAvoidingView>
)

export default Chat;