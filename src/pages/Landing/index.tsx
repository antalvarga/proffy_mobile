// Aula5 45:09 importacao do  useState, useEffect 
import React, { useState, useEffect } from 'react';

// Aula4 - 27:17 - importacao Image
// Aula4 - 42:47 - importacao do TouchableOpacity
import { View, Image, Text, TouchableOpacity } from 'react-native';

// Aula4 - 1:01:27 - Editar Landing
import { useNavigation } from '@react-navigation/native';

// Aula4 - 1:03:50 - Editar o Landing para usar o react-native-gesture-handler
import { RectButton } from 'react-native-gesture-handler';

// Aula4 - 27:27
import landingImage from '../../assets/images/landing.png';

// Aula4 - 43:40 
import studyIcon from '../../assets/images/icons/study.png';

// Aula4 - 45:11 
import giveClassesIcon from '../../assets/images/icons/give-classes.png';

// Aula4 - 48:45
import heartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';


// Aula4 - 26:55
import styles from './styles';


function Landing () {

    // Aula4 - 1:01:20
    // Aula4 - 1:02:09 - usar desestruturacao
    // const navigation = useNavigation();
    const {navigate} = useNavigation();

    // Aula5 - 45:04 - buscar o total de conexoes do banco
    const [ totalConnections, setTotalConnections ] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total);
        })

    }, []

    );



    // Aula4 - 1:01:39
    function handleNavigateToGivClassesPage() {
        navigate('GiveClasses');
    }

    // Aula4 - 1:19:24 - Alteracao na LandingPage para Criar function handleNavigateToStudyPage
    function handleNavigateToStudyPage() {
        navigate('Study')
    }

    // Aula4 - 26:55
    return (
        <View style={styles.container}>
            <Image source={landingImage} style={styles.banner}/>

            {/* Aula4 - 33:13 */}
            <Text style={styles.title}>
                Seja bem-vindo!!! {'\n'}Seu cabra {'\n'}
                <Text style={styles.titleBold}>O que tu quer? (Chato!)</Text>
            </Text>

            {/* Aula4 - 42:02 */}
            <View style={styles.buttonsContainer}>

                {/* Aula4 - 43:20 - botao de cor roxa */}
                {/* Aula4 - 1:19:54 - onPress */}
                <RectButton 
                    onPress={handleNavigateToStudyPage}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    {/* Aula4 - 43:40 - Image */}
                    <Image source={studyIcon} />

                    {/* Aula4 - 44:00 - inclusao do Text */}
                    <Text style={styles.buttonText}>Estudar</Text>
                </RectButton>

                {/* Aula4 - 45:03 - Dar Aulas */}
                {/* Aula4 - 1:02:30 - onPress */}
                <RectButton onPress={handleNavigateToGivClassesPage} style={[styles.button, styles.buttonSecondary]}>                    
                    <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Lecionar</Text>
                </RectButton>

            </View>

            {/* Aula4 - 48:00 */}
            <Text style={styles.totalConnections}>
                {/* Aula5 - 45:24 totalConnections */}
                Total de {totalConnections} conexões {' '}
                {/* Aula4 - 49:05 */}
                <Image source={heartIcon}/>
            </Text>
        </View>
    );
}

export default Landing;
