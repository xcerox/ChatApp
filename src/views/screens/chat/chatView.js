import React, { PureComponent } from 'react'
import { Text, FlatList } from 'react-native'
import PropTypes from 'prop-types'
import translations from '../../../i18n'
import ChatViewRow from './chatViewRow'
import { chat as styles } from '../../styles/style'
import { connect } from 'react-redux'
import { mapChatItems } from '../../../utils/helpers/convertUtil'

const ITEM_HEIGHT = 50;

const EmptyListMessage = props => (
  <Text style={styles.chatViewplaceholder}> {translations.t('messagesEmpty')} </Text>
)

class ChatView extends PureComponent {


  renderItem = ({ item }) => {
    return (<ChatViewRow message={item} currentEmail={this.props.userEmail} />);
  }

  itemLayout = (_, index) => (
    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
  )

  emptyList = () => {
    return (<EmptyListMessage />);
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