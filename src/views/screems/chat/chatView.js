import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import translations from '../../../i18n';
import ChatViewRow from './chatViewRow';
import { chat as styles } from '../../styles/style';
import { messages } from '../../../utils/helpers/messages.mock'

const ITEM_HEIGHT = 50;

class ChatView extends PureComponent {

  renderItem = ({ item }) => {
    return <ChatViewRow message={item} />
  }

  itemLayout = (_, index) => (
    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
  )

  emptyList = () => {
    return (<Text style={styles.chatViewplaceholder}> {translations.t('placeholder')} </Text>);
  }

  componentDidUpdate() {
    if (this.props.data.length) {
      this.flatList.scrollToIndex({ animated: true, index: 0 });
    }
  }

  render() {
    const data = messages;
    const style = data.length ? null : styles.chatViewlistContainer;

    return (
      <FlatList
        ref={ref => { this.flatList = ref }}
        style={styles.container}
        contentContainerStyle={style}
        data={data}
        keyExtractor={item => item.time}
        renderItem={this.renderItem}
        ListEmptyComponent={this.emptyList}
        inverted />
    )
  }
}


export default ChatView;