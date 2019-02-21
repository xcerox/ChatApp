import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  green: '#5cb85c',
}

const general = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    marginTop: '50%',
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: '15%',
  },
  link: {
    color: colors.green,
    fontSize: 15,
  }
})

const form = StyleSheet.create({
  input: {
    width: 300,
    marginTop: 10,
  },
  submit: {
    marginTop: 25,
    width: 300,
    borderRadius: 25,
  },
  formGroup: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
})

const login = StyleSheet.create({
  singup: {
    flexDirection: 'row',
    marginTop: 10,
  },
  loginFormHeight: {
    height: 150,
  }
})

export { general, form, login }