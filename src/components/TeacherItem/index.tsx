// Aula5 - 3:58
import React from 'react';
import {View, Text, Image} from 'react-native';

// Aula5 - 13:09
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../PageHeader';


// Aula5 - 13:27
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

// Aula5 - 5:16
import styles from './styles';

function TeacherItem() {
    return(
        
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/diego3g.png'}}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Diego Fernandes</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            {/* Aula5 - 9:59 */}
            <Text style={styles.bio}>
                Entusiasta das melhores tecnologias de química avançada
                {'\n'} {'\n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiência...
            </Text>

            {/* Aula5 - 12:06 */}
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'   '} 
                    <Text style={styles.priceValue}>20,00</Text>
                </Text>

                {/* Aula5 - 12:47 */}
                <View style={styles.buttonsContainer}>
                    {/* Aula5 - 21:47 adicionando o array ao style */}
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* Aula5 - 21:20 */}
                        {/* <Image source={heartOutlineIcon} /> */}
                        <Image source={unfavoriteIcon} />
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato.</Text>
                    </RectButton>
                </View>

            </View>
            
        </View>
    );
}

export default TeacherItem;
