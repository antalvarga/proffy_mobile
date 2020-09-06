// Aula4 - 1:30:00

import React from 'react';
import {Text, View, Image } from 'react-native';

// Aula4 - 1:31:50 - Quando o tipo de botão não tiver um backgroundColor usar o BordLessButton
import {BorderlessButton} from 'react-native-gesture-handler';

import styles from './styles';

// Aula4 - 1:32:39
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
    title: string;
}

// Aula4 - 1:36:41
// function PageHeader() {
const PageHeader: React.FC<PageHeaderProps> = ({title}) => {

    // Aula4 - 1:37:57
    // const {goBack} = useNavigation();
    const {navigate} = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return(
        <View style={styles.container} >
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}> 
                    <Image source={backIcon} resizeMode='contain' />
                </BorderlessButton>

                <Image source={logoImg} resizeMode='contain' />
            </View>

        </View>
    );
}

export default PageHeader;