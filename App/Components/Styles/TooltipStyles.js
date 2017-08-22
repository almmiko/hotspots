import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, .9)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    paddingRight: 15,
  },
  icon: {
    paddingHorizontal: 8,
  },
  iconContainer: {
    backgroundColor: '#36b97f',
    flex: 1,
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#707070',
    fontWeight: '500',
    fontSize: 17,
  },
  info: {
    color: '#b0b1b1',
    fontSize: 12,
  },
  textContainer: {
    padding: 8,
    marginRight: 25,
  },
  triangle: {
    width: 0,
    height: 0,
    alignSelf: 'center',
    borderStyle: 'solid',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 0,
    borderTopColor: 'rgba(255, 255, 255, .9)',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },
});
