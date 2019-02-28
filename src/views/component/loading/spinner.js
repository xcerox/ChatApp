import React from 'react'
import { View, Text } from 'react-native'
import { Spinner as ActivityIndicator } from 'native-base'
import { general } from '../../styles/style'


const Spinner = () =>
  <View style={general.center}>
    <ActivityIndicator  color={'#5cb85c'}/>
  </View>

export default Spinner;