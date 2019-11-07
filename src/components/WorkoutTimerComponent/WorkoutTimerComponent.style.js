import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '11%',
    width: '100%',
    backgroundColor: '#FFF',
  },
  row: {
    paddingLeft: 30,
    paddingRight: 20,
    paddingBottom: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  closeButton: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  timeText: {
    fontWeight: 'bold',
    fontFamily: 'arial',
    color: '#000',
    fontSize: 26,
  },
  button: {
    shadowColor: '#FFF',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2},
    width: '30%',
    backgroundColor: '#000',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  line: {
    height: 3,
    backgroundColor: '#000',
  },
});
