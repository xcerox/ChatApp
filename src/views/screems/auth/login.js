import React, { PureComponent } from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { Toast, Root } from 'native-base';
import { connect } from 'react-redux';
import translations from '../../../i18n';
import BasicLoginForm from '../../component/form/basicLoginForm';
import { loginUser } from '../../../store/actions/sessionActions'

import * as styles from '../../styles/style';


class Login extends PureComponent {

  static navigationOptions = {
    header: null
  }

  onLoginPress = user => {
    if (!user.email || !user.password) {
      this.showError('userOrPasswordEmpty');
    } else {
      this.props.login(user);
    }
  }

  onSignUpPress = () => {
    this.props.navigation.navigate('SingUp');
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

    if (this.props.error) {
      this.showError(this.props.error);
    }

    return (
      <Root>
        <BasicLoginForm
          buttonTitle={translations.t('login')}
          onButtonPress={this.onLoginPress}
          hasChild>
          <View style={styles.login.singup}>
            <Text>{translations.t('haveAccount')}</Text>
            <TouchableOpacity onPress={this.onSignUpPress}>
              <Text style={styles.general.link}>{translations.t('signup')}</Text>
            </TouchableOpacity>
          </View>
        </BasicLoginForm>
      </Root>
    )
  }
}

const map = ({ session }) => ({
  error: session.error
})

export default connect(map, { login: loginUser })(Login);