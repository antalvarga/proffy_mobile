// Aula5 - 4:26
import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
        , borderWidth: 1
        , borderColor: '#e6e6f0'
        , borderRadius: 8
        , marginBottom: 16
        , overflow: 'hidden'
        , 
    }
    , profile: {
        flexDirection: 'row'
        , alignItems: 'center'
        , padding: 24
        ,
    }
    // Aula5 - 08:32
    , avatar: {
        width: 64
        , height: 64
        , borderRadius: 32
        , backgroundColor: '#eee'
        ,
    }
    , profileInfo: {
        marginLeft: 16
        , 
    }
    , name: {
        fontFamily: 'Archivo_700Bold'
        , color: '#32264d'
        , fontSize: 20
        , 
    }
    // Aula5 - 09:28
    , subject: {
        fontFamily: 'Poppins_400Regular'
        , color: '#6a6180'
        , fontSize: 12
        , marginTop: 4
        , 
    }
    , bio: {
        // margin: 24
        marginHorizontal: 24
        , fontFamily: 'Poppins_400Regular'
        , fontSize: 12
        , lineHeight: 24
        , color: '#6a6180'
        , textAlign: 'justify'
    }
    // Aula5 - 15:03
    // Aula5 - 18:08 - marginTop
    , footer: {
        backgroundColor: '#fafafc'
        , padding: 24
        , alignItems: 'center'
        , marginTop: 24
        ,
    }
    // Aula5 - 15:26
    , price: {
        fontFamily: 'Poppins_400Regular'
        , color: '#6a6180'
        , fontSize: 14
        , 
    }
    // Aula5 - 15:40
    , priceValue: {
        fontFamily: 'Archivo_700Bold'
        , color: '#8257e5'
        , fontSize: 16
        , 
    }
    // Aula5 - 16:07
    , buttonsContainer: {
        flexDirection: 'row'
        , marginTop: 16
        , 
    }
    // Aula5 - 16:26
    , favoriteButton: {
        backgroundColor: '#8257e5'
        , width: 56
        , height: 56
        , borderRadius: 8
        , justifyContent: 'center'
        , alignItems: 'center'
        , marginRight: 8
        ,
    }
    // Aula5 - 22:13
    , favorited: {
        backgroundColor: '#e33d3d'
    }
    // Aula5 - 17:02
    , contactButton: {
        backgroundColor: '#04d361'
        // , width: 56
        , flex: 1
        , height: 56
        , borderRadius: 8
        , flexDirection: 'row'
        , justifyContent: 'center'
        , alignItems: 'center'
        , marginRight: 8
        ,
    }    
    // Aula5 - 17:29
    , contactButtonText: {
        color: '#fff'
        , fontFamily: 'Archivo_700Bold'
        , fontSize: 12
        , marginLeft: 16
        , 
    }
})

export default styles;