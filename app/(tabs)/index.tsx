import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { useFonts } from 'expo-font';

export default function TabOneScreen() {
  const [loaded, error] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf')
  })


  return (
    loaded ? 
    <View style={styles.container}>
      {/* <WelcomeBoard /> */}
      <Text style={styles.title}>Welcome to home screen</Text>
    </View> : null
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: Colors.black,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins'
  },
});
