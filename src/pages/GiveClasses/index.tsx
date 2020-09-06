// Aula4 - 1:00:20
import React from 'react';

// Aula4 - 1:07:00 - imagem de fundo
import { View, Text, ImageBackground } from 'react-native';

// Aula4 - 1:06:30
import styles from './styles';

// Aula4 - 1:07:00 - imagem de fundo
import giveClassesBgImage from '../../assets/images/give-classes-background.png'
import { RectButton } from 'react-native-gesture-handler';

// Aula4 - 1:13:30 - Voltar a tela anterior
import { useNavigation } from '@react-navigation/native';


function GiveClasses() {

    // Aula4 - 1:13:30 - Voltar a tela anterior
    // const navigation = useNavigation
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        
        <View style={styles.container}>
            <ImageBackground 
                resizeMode='contain' 
                source={giveClassesBgImage} 
                style={styles.content}
            >

                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>
                    Para começar você precisa se cadastrar como professor na nossa plataforma web
                </Text>

            </ImageBackground>

            {/* Aula4 - 1:14:10 - onPress */}
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    
    )
}

export default GiveClasses;

