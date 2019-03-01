import React, { PureComponent } from 'react'
import { Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import translations from '../../../i18n'
import ChatViewRow from './chatViewRow'
import { chat as styles } from '../../styles/style'
import { connect } from 'react-redux'
import { mapChatItems } from '../../../utils/helpers/convertUtil'

class ChatView extends PureComponent {

  ITEM_HEIGHT = 50;


  renderItem = ({ item }) => {
    return (<ChatViewRow message={item} currentEmail={this.props.userEmail} />);
  }

  itemLayout = (_, index) => (
    { length: this.ITEM_HEIGHT, offset: this.ITEM_HEIGHT * index, index }
  )

  emptyList = () => {
    return (<Text style={styles.chatViewplaceholder}> {translations.t('messagesEmpty')} </Text>);
  }

  keyExtractor = (item, _) => `${item.id}`;

  componentDidUpdate() {
    if (this.props.messages.length) {
      this.flatList.scrollToIndex({ animated: true, index: 0 });
    }
  }

  render() {
    const style = this.props.messages.length ? null : styles.chatViewlistContainer;

    return (
      <FlatList
        ref={ref => { this.flatList = ref }}
        style={styles.container}
        contentContainerStyle={style}
        data={this.props.messages}
        renderItem={this.renderItem}
        ListEmptyComponent={this.emptyList}
        keyExtractor={this.keyExtractor}
        inverted />
    )
  }
}

const map = ({chat, session}) => ({
  messages: mapChatItems(chat.messages),
  userEmail: session.user.email,
});

export default connect(map)(ChatView);