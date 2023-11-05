import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: COLORS.white,
    height: 160,
    width: Dimensions.get('screen').width * 0.45,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: { 
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10
  },
  image: {
    marginTop: 10,
    height: 120,
    width: Dimensions.get('screen').width * 0.4,
    borderRadius: 10
  },
})