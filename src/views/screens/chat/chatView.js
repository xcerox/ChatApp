import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import translations from '../../../i18n';
import ChatViewRow from './chatViewRow';
import { chat as styles } from '../../styles/style';

const ITEM_HEIGHT = 50;

const EmptyListMessage = props => (
  <Text style={styles.chatViewplaceholder}> {translations.t('messagesEmpty')} </Text>
)

class ChatView extends PureComponent {

  renderItem = ({ item }) => {
    return <ChatViewRow message={item} />
  }

  itemLayout = (_, index) => (
    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
  )

  emptyList = () => {
    return (<EmptyListMessage />);
  }

  keyExtractor = (item, _) => `${item.id}`;

  componentDidUpdate() {
    if (this.props.data.length) {
      this.flatList.scrollToIndex({ animated: true, index: 0 });
    }
  }

  render() {
    const data = [];
    const style = data.length ? null : styles.chatViewlistContainer;

    return (
      <FlatList
        ref={ref => { this.flatList = ref }}
        style={styles.container}
        contentContainerStyle={style}
        data={data}
        renderItem={this.renderItem}
        ListEmptyComponent={this.emptyList}
        keyExtractor={this.keyExtractor}
        inverted />
    )
  }
}


export default ChatView;