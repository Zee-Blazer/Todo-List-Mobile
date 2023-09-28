import 'react-native-gesture-handler';

import { useFonts } from 'expo-font';

// Navigation Container
import { MainNavigator } from './src/Infrastructure/Navigation';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [ fontsLoaded ] = useFonts({
    "Fuggles-Regular": require("./assets/fonts/Fuggles-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-BoldItalic": require("./assets/fonts/Roboto-BoldItalic.ttf"),
  })

  if(!fontsLoaded){
    return <Text>Hello My Nigga's</Text>
  }

  return (
    <>
      <MainNavigator />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
