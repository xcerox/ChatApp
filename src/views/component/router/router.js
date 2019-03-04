import React, { PureComponent } from 'react'
import { View, Text, NetInfo } from 'react-native'
import { connect } from 'react-redux'
import Chat from '../../screens/chat/'
import Navigator from './navigator'
import Loading from '../loading'
import NoConnection from '../error/NoConnection'
import { sessionRestore } from '../../../store/actions/sessionActions'



class Router extends PureComponent {

  state = {
    hasInternet: true
  }

  componentDidMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.onConectionChange(isConnected);
    });

    NetInfo.isConnected.addEventListener('connectionChange', this.onConectionChange);
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.onConectionChange);
  }

  restoreSession = () => {
    if (this.state.hasInternet) {
      this.props.sessionRestore();
    }
  }

  onConectionChange = isConnected => {
    this.setState({ hasInternet: isConnected }, this.restoreSession)
  }

  render() {
    let Component = Navigator;
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