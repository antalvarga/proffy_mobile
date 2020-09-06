// Aula4 - 1:30:00
import React from 'react';
import {Text, View, Image } from 'react-native';

// Aula4 - 1:31:35   - Quando o tipo de botão não tiver um backgroundColor usar o BordLessButton
import {BorderlessButton} from 'react-native-gesture-handler';

// Aula4 - 1:31:05
import styles from './styles';

// Aula4 - 1:32:39
import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';
import { useNavigation } from '@react-navigation/native';


// Aula4 - 1:36:26
interface PageHeaderProps{
    title: string;
}

// Aula4 - 1:36:41 
// function PageHeader() {
const PageHeader: React.FC<PageHeaderProps> = ({title}) => {

    // Aula4 - 1:37:57
    // const {goBack} = useNavigation();
    // Para forçar a navegacao para LandingPage use o navigate
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
            {/* Aula4 - 1:35:17 */}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default PageHeader;