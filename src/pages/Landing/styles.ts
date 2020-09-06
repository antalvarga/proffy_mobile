// Aula4 - 22:50
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
    , banner: {
        width: '100%'
        , resizeMode: 'contain'
        , 
    }
    // Aula4 - 34:41
    , title: {
        fontFamily: 'Poppins_400Regular'
        , color: '#fff'
        , fontSize: 20
        , lineHeight: 30
        , marginTop: 80
        ,
    }
    // Aula4 - 35:12
    , titleBold: {
        // Aula4 - 40:51
        // fontWeight: 'bold'
        fontFamily: 'Poppins_600SemiBold'
        ,
    }
    // Aula4 - 45:48
    , buttonsContainer: {
        // fara com que os botões fiquem ao lado
        flexDirection: 'row'
        , marginTop: 40
        , justifyContent: "space-between"
        , 
    }
    // Aula4 - 46:10
    , button: {
        height: 150
        , width: '48%'
        , backgroundColor: '#333'
        , borderRadius: 8
        , padding: 24
        , justifyContent: "space-between"
        , 
    }
    // Aula4 - 47:05
    , buttonPrimary: {
        backgroundColor: '#9871f5'
        , 
    }
    // Aul4 - 47:25
    , buttonSecondary: {
        backgroundColor: '#04d361'
    }
    , buttonText: {
        fontFamily: 'Archivo_700Bold'
        , color: '#fff'
        , fontSize: 16
    }
    // Aula4 - 49:43
    , totalConnections: {
        fontFamily: 'Poppins_400Regular'
        , color: '#d4c2ff'
        , fontSize: 14
        , lineHeight: 20
        , maxWidth: 240
        , marginTop: 35
    }
});

export default styles;