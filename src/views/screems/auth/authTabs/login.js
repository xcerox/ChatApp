import React, { PureComponent } from 'react'
import { View, Text } from 'react-native';
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
    alert(`email: ${user.email}`);
  }

  render() {
    return (
      <BasicLoginForm
        buttonTitle={translations.t('login')}
        onButtonPress={this.onLoginPress} >
        <View style={styles.login.singup}>
          <Text>{translations.t('haveAccount')}</Text>
          <Text style={styles.general.link}>{translations.t('singUp')}</Text>
        </View>
        
      </BasicLoginForm>
    )
  }
}

// export default connect(null, { login: loginUser })(Login);
export default Login;