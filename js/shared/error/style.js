import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    height: 74,
    width,
    backgroundColor: 'red',
  },
  content: {
    marginLeft: 10,
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 10,
    marginTop: 20,
  },
});
