import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import translations from '../../../i18n';
import relativeDate from 'relative-date';
import { chat as styles } from '../../styles/style';

const ChatViewRow = props => {
  const isCurrentUser = props.message.user.email.includes("me");
  const whoStyle = isCurrentUser ? styles.chatViewRowBubbleMe : styles.chatViewRowBubbleYou;
  const userName = isCurrentUser ? '' : (`- ${props.message.user.email}`);
  const time = relativeDate(new Date(props.message.createdAt));

  return (
    <View style={styles.chatViewRowContainer} >
      <View style={[styles.chatViewRowBubble, whoStyle]}>
        <Text styles={styles.chatViewRowMessageText}>
          {props.message.text}
        </Text>
        <Text style={styles.chatViewRowUserText}>
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