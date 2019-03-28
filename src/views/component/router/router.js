import React, { PureComponent } from 'react'
import { View, Text, NetInfo, AppState } from 'react-native'
import { connect } from 'react-redux'
import Chat from '../../screens/chat/'
import AuthNavigator from './authNavigator'
import Loading from '../loading'
import NoConnection from '../error/NoConnection'
import { sessionRestore } from '../../../store/actions/sessionActions'
import { updateUserStatus } from '../../../utils/helpers/sessionUtil'

class Router extends PureComponent {

  state = {
    hasInternet: true,
    appState: AppState.currentState,
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.onConectionChange(isConnected);
    });

    NetInfo.isConnected.addEventListener('connectionChange', this.onConectionChange);
    AppState.addEventListener('change', this.onAppStateChange);
  }

  componentDidUpdate() {
    if (this.props.logged && !this.state.appState.match(/inactive|background/))  {
      updateUserStatus('Online');
    } else if (this.props.logged && this.state.appState.match(/background/)) {
      updateUserStatus('Await');
    }
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.onConectionChange);
    AppState.removeEventListener('change', this.onAppStateChange);
  }

  restoreSession = () => {
    if (this.state.hasInternet) {
      this.props.sessionRestore();
    }
  }

  onAppStateChange = nextAppState => {
    this.setState({ appState: nextAppState });
  }

  onConectionChange = isConnected => {
    this.setState({ hasInternet: isConnected }, this.restoreSession)
  }

  render() {
    let Component = AuthNavigator;
    if (!this.state.hasInternet) {
      Component = NoConnection;
    } else if (this.props.restoring) {
      Component = Loading;
    } else if (this.props.logged) {
      Component = Chat;
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