import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  green: '#5cb85c',
  greenLight: '#b5e0ba',
  blueLight: '#8ed6ff',
  gray: '#BBC2C2',
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

const chat = StyleSheet.create({
  generalContainer: {
    flex: 1,
    backgroundColor: colors.white,
    flexDirection: 'column',
    height: '100%',
  },
  chatViewContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  chatViewlistContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  chatViewplaceholder: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center'
  },

  chatViewRowContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  chatViewRowBubble: {
    flex: 1,
    borderRadius: 8,
    paddingTop: 6,
    paddingHorizontal: 8,
    paddingBottom: 1
  },
  chatViewRowBubbleMe: {
    backgroundColor: colors.greenLight,
    alignItems: 'flex-end',
    marginLeft: 50,
  },
  chatViewRowBubbleYou: {
    backgroundColor: colors.blueLight,
    justifyContent: 'flex-start',
    marginRight: 50,
  },
  chatViewRowUserText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 12,
  },
  chatViewRowMessageText: {
    flex: 1,
    color: colors.white,
    fontSize: 16,
  }
});

export { general, form, login, chat }