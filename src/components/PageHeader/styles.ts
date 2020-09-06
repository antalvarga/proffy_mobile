// Aula4 - 1:30:00
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 40
        , backgroundColor: '#8257e5'
        , 
    }
    , topBar: {
        flexDirection: 'row'
        , alignItems: 'center'
        , justifyContent: 'space-between'
        , marginTop: 30
        ,
    }
    // Aula5 - 38:12
    , header: {
        flexDirection: 'row'
        , alignItems: 'center'
        , justifyContent: 'space-between'
        , 
    }
    , title: {
        fontFamily: 'Archivo_700Bold'
        , color: '#fff'
        , fontSize: 24
        , lineHeight: 32
        , maxWidth: 160
        , marginVertical: 40
        , 
    }
});

export default styles;