import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
    backButton: {
        paddingTop:50,
        paddingLeft: 30
    },
    title: {
        color: COLORS.primary,
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 30
    },
    subtitle: {
        color: COLORS.secundary,
        fontSize: 25,
        fontWeight: 'bold',
    },
    description: {
        color: COLORS.grey,
        fontSize: 15,
        marginTop: 10,
    },
    image: {
        marginTop: 10,
        height: 250,
        width: Dimensions.get('screen').width * 0.85,
        borderRadius: 30,
        marginBottom: 20
    },
    detailBox: {
        marginLeft: 30,
        width: Dimensions.get('screen').width * 0.85,
        marginBottom: 20,
    },
    time: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        alignItems: 'center',
        marginTop: 5
    }
})