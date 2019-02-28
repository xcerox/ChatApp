import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import Chat from '../../screens/chat/'
import Navigator from './navigator'
import Spinner from '../loading/spinner'
import { sessionRestore } from '../../../store/actions/sessionActions'
import { general } from '../../styles/style'
import translations from '../../../i18n' 

const Loading = () => {
  return (
    <View >
      <Spinner />
      <Text style={general.loadingText}> {translations.t('restoring')}</Text>
    </View>
  ) 
}


class Router extends PureComponent {

  componentDidMount() {
    this.props.sessionRestore();
  }

  render() {
    let Component = null;

    if (this.props.restoring) {
      Component = Loading;
    } else if (this.props.logged) {
      Component = Chat;
    } else { 
      Component = Navigator;
    }

    return (
      <Component />
    )
  }
}

const map = ({ session }) => ({
  restoring: session.restoring,
  logged: session.user != null,
})

export default connect(map, { sessionRestore })(Router);