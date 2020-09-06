import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Aula4 - 24:28
import Landing from './src/pages/Landing';

//  Aula4 - 37:14
import { AppLoading } from 'expo';
import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';

// Aula4 - 58:03
import AppStack from './src/routes/AppStack';


export default function App() {

  // Aula4 - 39:12 
  let [fontsLoaded] = useFonts({
    Archivo_400Regular
    , Archivo_700Bold
    , Poppins_400Regular
    , Poppins_600SemiBold
  });

  // Aula4 - 39:54 - Enquanto as fontes não estiverem carregadas eu mostro o AppLoading
  if( !fontsLoaded ){
    return <AppLoading /> ;

  } else {
    return (
      // Aula4 - 24:28 - Suprimir a View abaixo
      // <View style={styles.container}>
      //   <Text style={styles.title}>Hello world... asv</Text>
      //   <StatusBar style="auto" />
      // </View>
      <>
        {/*         
        Aula4 - 58:03
        <Landing />
        */}
        <AppStack />

        {/* // Aula4 - 51:40 - Alterar o App.tsx
        <StatusBar style="auto" /> 
        */}
        <StatusBar style="light" />
      </>
    );    
  }
}

// Aula4 - 25:03
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
//   , title: {
//     fontSize: 32
//     , color: '#fff'
//     , fontWeight: 'bold'
//   }
// });
