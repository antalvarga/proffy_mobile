// Aula4 - 1:30:00
// Aula5 - 36:34 - ReactNode
import React, {ReactNode} from 'react';
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
// Aula5 - 36:34 - headerRight e ReactNode para receber um objeto no pageHeader
interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;
}

// Aula4 - 1:36:41 
// function PageHeader() {
// Aula5 - 24:48 - children    
const PageHeader: React.FC<PageHeaderProps> = ({title, headerRight, children}) => {

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

            {/* Aula5 - 37:57 View por volta do title e headerRight*/}
            <View style={styles.header}>

                {/* Aula4 - 1:35:17 */}
                <Text style={styles.title}>{title}</Text>

                {/* Aula5 - 37:23 */}
                {headerRight}

            </View>


            {/* Aula5 - 24:53 */}
            {children}
        </View>
    );
}

export default PageHeader;