import React, { PureComponent } from 'react'
import { View } from 'react-native';
import { Item as FormItem, Input, Icon, Button } from 'native-base';
import PropTypes from 'prop-types'
import translations from '../../../i18n';
import * as styles from '../../styles/style';

class ChatInput extends PureComponent {

  state = {
    message: ''
  }

  onMessageChange = message => {
    this.setState({ message });
  }

  onButtomPress = () => {

  }

  render() {
    const disable = this.props.sending || this.state.message.trim().length == 0;
    const disableStyle = disable?{backgroundColor: '#f0ece2'}:{};
    const disbleBottom = disable?{color: 'red'}:{};

    return (
      <View style={styles.chat.chatInputContainer}>
        <View style={{width: '80%'}} >
          <FormItem rounded>
            <Input
              style={styles.chat.chatInputMessage}
              placeholder={translations.t('message')}
              value={this.state.message}
              onChangeText={this.onMessageChange}
              underlineColorAndroid={'transparent'}
              editable={true}
              returnKeyType='send' 
              />
          </FormItem>
        </View>
        <View style={[styles.chat.chatInputBottomBackground, disableStyle]}>
          <Button transparent disabled={disable} onPress={this.onButtomPress} >
            <Icon name='send' style={[{color: 'green'}, disbleBottom]} />
          </Button>
          
        </View>
      </View>
    )
  }
}


// ChatInput.prototype = {
//   sendMessage: PropTypes.func.isRequired,
//   sending: PropTypes.bool.isRequired,
// }

export default ChatInput;