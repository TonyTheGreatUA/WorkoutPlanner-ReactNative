import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  cardView: {
    margin: 3,
    borderRadius: 3,
    backgroundColor: '#FFF',
    flexDirection: 'column',
    width: '98%',
    height: '18%',
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  topRow: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  topRowText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 14,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#d22d2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: '#fff',
  },
  circleText: {
    fontSize: 16,
  },
  grayText: {
    color: 'gray',
  },
  fadedBackground: {
    backgroundColor: '#B2A1A1',
  },
});
