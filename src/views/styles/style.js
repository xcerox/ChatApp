import { StyleSheet } from 'react-native';

const colors = {
  white: '#fff',
  green: '#5cb85c',
  greenLight: '#b5e0ba',
  blueLight: '#defcfc',
  gray: '#BBC2C2',
  grayDark: '#738598',
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
    marginTop: '75%',
  },
  logo: {
    height: 120,
    width: 120,
    marginTop: '15%',
  },
  link: {
    color: colors.green,
    fontSize: 15,
  },
  loadingText: {
    alignSelf: 'center',
    marginLeft: 15
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
    alignSelf: 'center'
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
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
  backgroundImageOverlay: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  backgroundImage: {
    flex: 1,
  },
  chatViewContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  chatViewlistContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  chatViewplaceholder: {
    fontSize: 16,
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    transform: [{ scaleX: -1 }, { rotate: '180deg' }]
  },

  chatViewRowContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatViewRowBubble: {
    flex: 1,
    borderRadius: 8,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingTop: 6,
    paddingHorizontal: 8,
    paddingBottom: 1,

    //Its for IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

    // its for android 
    elevation: 2,
  },
  chatViewRowBubbleMe: {
    backgroundColor: '#a4f6a5',
    alignItems: 'flex-end',
    marginLeft: 50,
  },
  chatViewRowBubbleYou: {
    backgroundColor: colors.white,
    justifyContent: 'flex-start',
    marginRight: 50,
  },
  chatViewRowUserText: {
    color: colors.grayDark,
    fontSize: 12,
  },
  chatViewRowUserTextMe: {
    alignSelf: 'flex-start',
  },
  chatViewRowUserTextYou: {
    alignSelf: 'flex-end',
  },
  chatViewRowMessageText: {
    color: '#000',
    fontSize: 14,
  },

  chatInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '100%',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 6,
  },
  chatInputMessage: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 25,
    elevation: 2,
  },
  chatInputBottomBackground: {
    backgroundColor: '#a4f6a5',
    borderRadius: 75,
    borderWidth: 1,
    borderColor: colors.gray,
    width: 60,
    height: 50,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    elevation: 10,
  }
});

export { general, form, login, chat }