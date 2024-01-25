import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';

//icons
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Colors from '../../constants/Colors';
import AppHeader from '../components/AppHeader';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    Poppins: require('../../assets/fonts/Poppins-Regular.ttf'),
    PoppinsBold: require('../../assets/fonts/Poppins-Bold.ttf'),
    ...FontAwesome.font,
  });

  return loaded ? (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontSize: 18,
          fontFamily: 'PoppinsBold',
          color: Colors.black
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: Colors.black,
        tabBarInactiveBackgroundColor: Colors.black
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleStyle: {
            display: 'none'
          },
          tabBarShowLabel: true,
          tabBarLabelStyle:{
            fontSize: 12,
            fontFamily: 'PoppinsBold'
          },
          header: () => <AppHeader />,
          tabBarIcon: () => <FontAwesome5 name="home" size={28} color={Colors.white} />
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: 'Calculator',
          headerTitleStyle: {
            display: 'none'
          },
          tabBarShowLabel: true,
          tabBarLabelStyle:{
            fontSize: 12,
            fontFamily: 'PoppinsBold'
          },
          // header: () => <ProfileHeader />,
          tabBarIcon: () => <FontAwesome5 name="calculator" size={28} color={Colors.white} />
        }}
      />
      <Tabs.Screen
        name="crypto"
        options={{
          title: 'Crypto',
          headerTitleStyle: {
            display: 'none'
          },
          tabBarShowLabel: true,
          tabBarLabelStyle:{
            fontSize: 12,
            fontFamily: 'PoppinsBold'
          },
          // header: () => <ProfileHeader />,
          tabBarIcon: () => <FontAwesome5 name="btc" size={28} color={Colors.white} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerTitleStyle: {
            display: 'none'
          },
          tabBarShowLabel: true,
          tabBarLabelStyle:{
            fontSize: 12,
            fontFamily: 'PoppinsBold'
          },
          header: () => <AppHeader />,
          tabBarIcon: ({ color }) => <Feather name="settings" size={28} color={Colors.white} />
        }}
      />
    </Tabs>
  ): null;
}
