import React, { PureComponent } from 'react'
import { Toast, Root } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import translations from '../../../i18n'
import BasicLoginForm from '../../component/form/basicLoginForm'
import { signupUser } from '../../../store/actions/sessionActions'

class SignUp extends PureComponent {

  static navigationOptions = {
    title: translations.t('newAccount')
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.error && this.props.error) {
      this.showError(this.props.error);
    }
  }

  onRegisterPress = user => {
    if (!user.email || !user.password) {
      Toast.show({
        text: translations.t('userOrPasswordEmpty'),
        buttonText: translations.t('ok'),
        type: 'danger',
        position: 'top',
      });
    } else {
      this.props.signup(user);
    }
  }

  showError = key => {
    const message = translations.t(key);

    Toast.show({
      text: message,
      buttonText: translations.t('ok'),
      type: 'danger',
      position: 'top',
    });
  }

  render() {
    return (
      <Root>
        <BasicLoginForm
          buttonTitle={translations.t('signup')}
          onButtonPress={this.onRegisterPress}
          showLoading={this.props.loading}
          register
        />
      </Root>
    )
  }
}

const map = ({ session }) => ({
  loading: session.loading,
  error: session.error
})

export default connect(map, { signup: signupUser })(SignUp);