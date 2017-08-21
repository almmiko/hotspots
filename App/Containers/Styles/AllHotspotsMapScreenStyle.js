import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 18,
  },
  button: {
    width: '80%',
    paddingVertical: 20,
    alignItems: 'center',
    marginHorizontal: 20,
    opacity: 0.85,
    backgroundColor: '#36b97f',
    borderRadius: 8,
  },
});

export default styles;
