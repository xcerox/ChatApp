import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import translations from '../../../i18n';
import relativeDate from 'relative-date';
import { chat as styles } from '../../styles/style';

const ChatViewRow = props => {
  const isCurrentUser = props.message.user.email.includes("me");
  const senderStyle = isCurrentUser ? styles.chatViewRowBubbleMe : styles.chatViewRowBubbleYou;
  const messageStyle = isCurrentUser ? styles.chatViewRowUserTextMe : styles.chatViewRowUserTextYou;
  const userName = isCurrentUser ? '' : (`- ${props.message.user.email}`);
  const time = relativeDate(new Date(props.message.createdAt));

  return (
    <View style={styles.chatViewRowContainer} >
      <View style={[styles.chatViewRowBubble, senderStyle]}>
        <Text style={styles.chatViewRowMessageText}>
          {props.message.text}
        </Text>
        <Text style={[styles.chatViewRowUserText, messageStyle]}>
          {`${time} ${userName}`}
        </Text>
      </View>
    </View>
  )
}

ChatViewRow.prototype = {
  message: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    })
  })
}

export default ChatViewRow;