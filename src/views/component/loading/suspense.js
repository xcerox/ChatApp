
import React from 'react';
import { View } from 'react-native';
import Spinner from './spinner';
import { general } from '../../styles/style'

const Suspense = ({ showLoading, children }) => {
  
  const style = (showLoading)? general.Container: {};
  
  return (

  <View style={style}>
    {
      showLoading ? (<Spinner />) : (children)
    }
  </View>
)}

export default Suspense;