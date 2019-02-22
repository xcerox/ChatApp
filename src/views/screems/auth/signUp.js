import React, { PureComponent } from 'react'
import { Toast, Root } from 'native-base';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import translations from '../../../i18n';
import BasicLoginForm from '../../component/form/basicLoginForm'
import { signupUser } from '../../../store/actions/sessionActions';


class SignUp extends PureComponent {

  static navigationOptions = {
    title: translations.t('newAccount')
  }

  componentDidUpdate(props) {
    if (props.error) {
      this.showError(error);
    }
  }

  onRegisterPress = user => {
    if (!user.email || !user.password) {
      Toast.show({
        text: translations.t('userOrPasswordEmpty'),
        buttonText: translations.t('ok'),
      });
    } else {
      this.props.signup(user);
    }
  }
  
  showError = message => {
    Toast.show({
      text: message,
      buttonText: translations.t('ok'),
      type: 'danger'
    });
  }

  render() {
    const { err } = this.props;
    return (
      <Root>
        <BasicLoginForm
          buttonTitle={translations.t('signup')}
          onButtonPress={this.onRegisterPress}
          register
        />
      </Root>
    )
  }
}

// SignUp.prototype = {
//   signup: PropTypes.func.isRequired,
// }

export default connect(null, {signup:signupUser})(SignUp);