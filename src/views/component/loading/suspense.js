
import React from 'react';
import { View } from 'react-native';
import Spinner from './spinner';

const Suspense = ({ showLoading, children }) => (
  <View  >
    {
      showLoading ? (<Spinner />) : (children)
    }
  </View>
)

export default Suspense;