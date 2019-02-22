import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import translations from '../../../i18n';
import MessageRow from './messageRow';
import * as styles from '../../styles/style';

const ITEM_HEIGHT = 50;

class Messages extends PureComponent {

  renderItem = ({item}) => {
    return <MessageRow message={item} />;
  }

  
}