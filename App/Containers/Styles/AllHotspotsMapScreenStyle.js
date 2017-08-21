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
  input: {
    width: '75%',
    textAlign: 'center',
    marginVertical: 10,
  },
  modalTitle: {
    color: '#36b97f',
    fontWeight: '400',
    fontSize: 19,
    marginBottom: 3,
  },
  modalBtn: {
    marginBottom: 12,
  },
  modalSubTitle: {
    color: '#707070',
    fontWeight: '400',
    fontSize: 12,
  },
  modal: {
    height: 350,
    backgroundColor: 'rgba(255, 255, 255, .9)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
