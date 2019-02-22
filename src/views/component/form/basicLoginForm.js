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
import { View, Image } from 'react-native';
import translations from '../../../i18n';
import * as styles from '../../styles/style';
import logo from '../../../assets/logo/chatLogo.png';

class BasicLoginForm extends PureComponent {

  state = {
    email: '',
    password: ''
  }

  onEmailChange = email => {
    this.setState({ email })
  }

  onPasswordChange = password => {
    this.setState({ password })
  }

  onButtonPress = () => {
    this.props.onButtonPress(this.state);
  }

  render() {

    const { buttonTitle, children, register, hasChild } = this.props;
    const { email, password } = this.state;

    let child = (hasChild) ? children : null;

    return (
      <Container style={styles.general.Container}>
        <Content>
          <View style={styles.form.formGroup}>
            <Image source={logo} style={styles.general.logo} />
          </View>
          <View style={[styles.form.formGroup, styles.login.loginFormHeight]}>
            <FormItem floatingLabel style={styles.form.input}>
              <Icon active name='person' />
              <Label> {translations.t('email')} </Label>
              <Input value={email} onChangeText={this.onEmailChange} />
            </FormItem>
            <FormItem floatingLabel style={styles.form.input} error={false}>
              <Icon active name='lock' />
              <Label> {translations.t('password')} </Label>
              <Input secureTextEntry={true} value={password} onChangeText={this.onPasswordChange} />
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
}

export default BasicLoginForm;