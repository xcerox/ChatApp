import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { loadingStyle } from '../../styles/style'

const Spinner = () =>
  <View style={loadingStyle.loadingContainer}>
    <ActivityIndicator style={loadingStyle.loadingIndicator} />
  </View>

export default Spinner;