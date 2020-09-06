// Aula4 - 1:20:41 - Estilização do TeacherList
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    container: {
        flex: 1
        , backgroundColor: '#f0f0f7'
    }
    // Aula5 - 18:55
    , teacherList: {
        marginTop: -40
        // Aula5 - 20:00 - alterado TeacherList contentContainerStyle
        // , padding: 16
        , backgroundColor: '#d4c2ff'
    } 
    // Aula5 - 28:00
    , searchForm: {
        // Aula5 - 41:30
        // marginBottom: 8
        marginBottom: 24
        , 
    }
    , label: {
        color: '#d4c2ff'
        , fontFamily: 'Poppins_400Regular'
    }
    // Aula5 - 30:23
    , inputGroup: {
        flexDirection: 'row'
        , justifyContent: 'space-between'
        ,
    }
    // Aula5 - 30:37
    , inputBlock: {
        width: '48%'
    }
    // Aula5 - 28:40
    , input: {
        height: 54
        , backgroundColor: '#fff'
        , borderRadius: 8
        , justifyContent: 'center'
        , paddingHorizontal: 16
        , marginTop: 4
        , marginBottom: 16
        , 
    }
    // Aula5 - 41:00
    , submitButton:{
        backgroundColor: '#04d361'
        , height: 56
        , borderRadius: 8
        , flexDirection: 'row'
        , justifyContent: 'center'
        , alignItems: 'center'
        , 
    }
    // Aula5 - 41:39
    , submitButtonText:{
        color: '#fff'
        , fontFamily: 'Archivo_700Bold'
        // , fontFamily: 'Poppins_400Regular'
        , fontSize: 16
        ,         
    }
});

export default styles;