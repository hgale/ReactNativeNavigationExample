import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    margin: 15,
    textAlign: 'center',
  },
  colorView: {
    width: 80,
    height: 80,
    margin: 10,
  },
  button: {
    padding: 6,
    margin: 10,
    backgroundColor: 'red',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
