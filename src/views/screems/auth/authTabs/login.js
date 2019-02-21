import React, { PureComponent } from 'react'
import { View, Text } from 'react-native';
import { Toast, Root } from 'native-base';
// import { connect } from 'react-redux
import BasicLoginForm from '../../../component/form/basicLoginForm';
// import { loginUser } from '../../../../store/actions/sessionActions';
import translations from '../../../../i18n';
import * as styles from '../../../styles/style';


class Login extends PureComponent {

  static navigationOptions = {
    header: null
  }

  onLoginPress = user => {
    if (!user.email && !user.password) {
      Toast.show({
        text: 'Wrong user and password!',
        buttonText: "Ok",
      });
    }
  }

  render() {
    return (
      <Root>
        <BasicLoginForm
          buttonTitle={translations.t('login')}
          onButtonPress={this.onLoginPress} >
          <View style={styles.login.singup}>
            <Text>{translations.t('haveAccount')}</Text>
            <Text style={styles.general.link}>{translations.t('singUp')}</Text>
          </View>
        </BasicLoginForm>
      </Root>
    )
  }
}

// export default connect(null, { login: loginUser })(Login);
export default Login;