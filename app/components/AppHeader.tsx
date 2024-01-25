import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/Colors';


const AppHeader = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.logoBox}>
                    <Image 
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../../assets/images/logo.png')} 
                    />
                    <Text style={styles.headerText}>Ohere Xchange</Text>
                </View>
            </View>
        </>
    )
}

export default AppHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black,
        flexDirection: 'row',
        alignContent: 'center',
        height: 100,
        paddingTop: Platform.OS === 'ios' ? 40 : 50,
        paddingBottom: 20,
        paddingHorizontal: 16,
    },
    logoBox: {
        flex: 1,
        gap: 0,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain'
    },
    headerText: {
        fontSize: 20,
        fontWeight: "500",
        color: Colors.white
    },
})