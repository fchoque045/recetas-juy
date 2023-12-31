import { StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.background
  },
  title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.text,
    width: '100%',
    marginLeft: 25
  },
  buttonIn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 180,
    marginHorizontal: 50,
    alignItems: 'center'
  },
  buttonUp: {
    backgroundColor: COLORS.secondaty,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 200,
    marginHorizontal: 50,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  containerLogo: {
    width: '100%',
    height: '50%',
  },
  logo: {
    resizeMode: 'cover',
    width: '100%',
    height: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
})