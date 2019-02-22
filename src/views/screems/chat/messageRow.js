import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import translations from '../../../i18n';
import relativeDate from 'relative-date';
import * as styles from '../../styles/style';

const MessageRow = props => {

  const currentUserStyle = {};
  const userName = props.isCurrentUser ? translations.t('you') : props.message.user.email;
  const date = relativeDate(new date(props.message.createdAt));

  return (
    <View >
      <View style={[{}, currentUserStyle]}>
        <Text >
          {`${date} - ${userName}`}
        </Text>
        <Text >
          {props.message.text}
        </Text>
      </View>
    </View>
  )
}

MessageRow.prototype = {
  isCurrentUser: PropTypes.bool.isRequired,
  message: PropTypes.shape({
    createdAt: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      email: PropTypes.string.isRequired
    })
  })
}

export default MessageRow;