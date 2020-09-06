// Aula4 - 1:04:39 - copiar os mesmos estilos do landing

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // Aula4 - 29:30
    container: {
        flex: 1
        , backgroundColor: '#8257e5'
        , justifyContent: 'center'
        , padding: 40
        , 
    }
    , content: {
        // marginTop eu inclui por minha conta
        marginTop: 30
        , flex: 1
        , justifyContent: "center"
        , 
    }
    // Aula4 - 1:10:50
    , title: {
        fontFamily: 'Archivo_700Bold'
        , color: '#fff'
        , fontSize: 32
        , lineHeight: 37
        , maxWidth: 200
        , 
    }
    // Aula4 - 1:10:55
    , description: {
        marginTop: 24
        , color: '#d4c2ff'
        , fontSize: 16
        , lineHeight: 26
        , fontFamily: 'Poppins_400Regular'
        , maxWidth: 240
    }
    // Aula4 - 1:12:24
    , okButton: {
        marginVertical: 40
        , backgroundColor: '#04d361'
        , height: 58
        , alignItems: 'center'
        , justifyContent: 'center'
        , borderRadius: 8
        ,
    }
    // Aula4 - 1:13:12
    , okButtonText: {
        color: '#fff'
        , fontSize: 16
        , fontFamily: 'Archivo_700Bold'
    }
});

export default styles;