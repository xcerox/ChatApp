import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  Button,
  Text,
  Item as FormItem,
  Input,
  Label,
  Icon
} from 'native-base';
import Suspence from '../loading/suspense'
import { View, Image } from 'react-native';
import translations from '../../../i18n';
import * as styles from '../../styles/style';
import logo from '../../../assets/images/chatLogo.png';

class BasicLoginForm extends PureComponent {

  state = {
    nickname: '',
    email: '',
    password: '',
    showPassword: false,
  }

  generateStateChanger = key => {
    return value => {
      this.setState({ [key]: value })
    }
  }

  onButtonPress = () => {
    this.props.onButtonPress(this.state);
  }

  onShowPasswordChange = () => {
    this.setState(prevState => {
      return { showPassword: !prevState.showPassword }
    });
  }

  render() {

    const { buttonTitle, children, register, showLoading, hasChild } = this.props;
    const { nickname, email, password, showPassword } = this.state;

    let child = (hasChild) ? children : null;
    const showPasswordIcon = showPassword ? 'eye-off' : 'eye';

    return (
      <Container >
        <Content>
          <Suspence showLoading={showLoading}>
            <View style={styles.form.formGroup}>
              <Image source={logo} style={styles.general.logo} />
            </View>
            <View style={[styles.form.formGroup, styles.login.loginFormHeight]}>
              {register && (
                <FormItem floatingLabel style={styles.form.input}>
                  <Icon active name='person' />
                  <Label> {translations.t('displayName')} </Label>
                  <Input value={nickname} onChangeText={this.generateStateChanger('nickname')} />
                </FormItem>
              )}
              <FormItem floatingLabel style={styles.form.input}>
                <Icon active name='at' />
                <Label> {translations.t('email')} </Label>
                <Input value={email} onChangeText={this.generateStateChanger('email')} />
              </FormItem>
              <FormItem floatingLabel style={styles.form.input} error={false}>
                <Icon active name='lock' />
                <Label> {translations.t('password')} </Label>
                <Input secureTextEntry={!showPassword} value={password} onChangeText={this.generateStateChanger('password')} />
                <Icon active name={showPasswordIcon} onPress={this.onShowPasswordChange} />
              </FormItem>
            </View>
            <View style={styles.form.formGroup}>
              <Button full success={!register} primary={register} style={styles.form.submit} onPress={this.onButtonPress}>
                <Text> {buttonTitle} </Text>
              </Button>
              {
                child
              }
            </View>
          </Suspence>
        </Content>
      </Container>
    )
  }
}

BasicLoginForm.propTypes = {
  buttonTitle: PropTypes.string.isRequired,
  register: PropTypes.bool,
  hasChild: PropTypes.bool,
  onButtonPress: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
}

export default BasicLoginForm;