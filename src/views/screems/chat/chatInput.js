import React, { PureComponent } from 'react'
import { View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { Item as FormItem, Input, Icon } from 'native-base';
import PropTypes from 'prop-types'
import translations from '../../../i18n';
import * as styles from '../../styles/style';


const OPACITY_ENABLED = 1.0;
const OPACITY_DISABLED = 0.2;

const ChatInput = props => {

  const onMessageChange = message => {
    props.updateMessage(message);
  }

  const onButtomPress = () => {
    props.sendMessage(props.message);
  }

  // const isButtonDisabled = props.sending || props.message.trim().length == 0;
  // const opacity = isButtonDisabled ? OPACITY_DISABLED : OPACITY_ENABLED;

  return (
    <View >
      <View >
        <FormItem rounded>
          <Input
            placeholder={translations.t('message')}
            value={props.message}
            onChangeText={onMessageChange}
            underlineColorAndroid={'transparent'}
            editable={!props.sending}
            returnKeyType='send' />
        </FormItem>
      </View>
      <View >
        <Icon active name='send' color={'red'} onPress={onButtomPress} />
      </View>
    </View>
  )
}


ChatInput.prototype = {
  updateMessage: PropTypes.func.isRequired,
  sendMessage: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  sending: PropTypes.bool.isRequired,
}

export default ChatInput;