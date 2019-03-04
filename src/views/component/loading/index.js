import React from 'react'
import { View, Text } from 'react-native'
import Spinner from './spinner'
import translations from '../../../i18n'

import { general } from '../../styles/style';

const Loading = () => (
  <View >
    <Spinner />
    <Text style={general.loadingText}> {translations.t('loading')}</Text>
  </View>
)


export default Loading;