import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BasicLoginForm from '../../../component/form/basicLoginForm'
import { signupUser } from '../../../../store/actions/sessionActions';
import translations from '../../../../i18n';

class SignUp extends PureComponent {

  static navigationOptions = {
    tabBarLabel: translations.t('signup')
  }

  render() {
    return (
      <BasicLoginForm
        buttonTitle={translations.t('signup')}
        onButtonPress={this.props.signup} />
    )
  }
}


SignUp.propTypes = {
  signup: PropTypes.func.isRequired
}

export default connect(null, { signup: signupUser })(SignUp)