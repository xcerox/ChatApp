import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import Suspense from '../../component/loading/suspense';

import * as style from '../../styles/style';
// import AuthTabs from './authTabs';

class AuthScreen extends PureComponent {


  render() {

    const { loading } = this.props;

    return (
      <View style={style.general.generalContainer} >
        <Suspense showLoading={false}>
        </Suspense>
      </View>
    )
  }
}

// AuthScreen.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   error: PropTypes.string,
// }

// const map = ({ session }) => ({
//   loading: session.loading,
//   error: session.error,
// })

export default AuthScreen;