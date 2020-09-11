// Aula5 - 3:58
// Aula5 - 1:07:47 - useState
import React, { useState } from 'react';

// Aula5 - 59:17 - Linking
import {View, Text, Image, Linking} from 'react-native';

// Aula5 - 13:09
import { RectButton } from 'react-native-gesture-handler';

// Aula5 - 1:25:31
import api from '../../services/api';

// Aula5 - 1:09:08 
import AsyncStorage from '@react-native-community/async-storage';

// Aula5 - 13:27
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';



// Aula5 - 5:16
import styles from './styles';



// Aula5 - 54:11 - Alterar  TeacherItem adicionando a interface
export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost:number;
    name: string;
    subject:string;
    whatsapp:string;
}

interface TeacherItemProps {
    teacher: Teacher;
    // Aula5 - 1:04:23
    favorited: boolean;
}

// Aula5 - 54:39 - transformar a function abaixo em uma const arrow function
// function TeacherItem() {
// Aula5 - 1:07:33 - favorited  
const TeacherItem:React.FC<TeacherItemProps> = ({ teacher, favorited }) => {

    // Aula5 - 1:07:41
    const [isFavorited, setIsFavorited ] = useState(favorited);

    function handleLinkToWhatsapp() {
        // Aula5 - 1:25:27 
        api.post('connections', {
            user_id: teacher.id
            , 
        })

        Linking.openURL(`whatsapp://send?text=Olá isso é um teste&phone=${teacher.whatsapp}`);
    }

    // Aula5 - 1:07:19
    async function handleToggleFavorite() {
        // Aula5 - 1:13:16 - Essa instrucao servira tanto ao if como ao else
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if( favorites ) {
            favoritesArray = JSON.parse(favorites);
        }

        if(isFavorited){
            // remover
            // Aula5 - 1:13:42 - Varrer todos os favoritos procurando e retornando 
            // a posicao do teacher dentro do array 
            const favoriteIndex = favoritesArray.findIndex( (teacherItem : Teacher) => {
                return teacherItem.id === teacher.id;
            });

            // Aula5 - 1:15:20 - remover 
            favoritesArray.splice(favoriteIndex, 1);

            // Aula5 - 1:15:41 
            setIsFavorited(false);

        } else {
            // adicionar
            // Aula5 - 1:13:16 - Essa instrucao foi transferida para antes do if
            // const favorites = await AsyncStorage.getItem('favorites');
            
            // Aula5 - 1:09:57 let
            // let favoritesArray = [];

            // if( favorites ) {
            //     favoritesArray = JSON.parse(favorites);
            // }

            favoritesArray.push(teacher);

            // Aula5 - 1:11:06
            setIsFavorited(true);
            
            // Converter o json em string e salvar
            // Aula5 - 1:15:39 - como a atualizacao sera comum ao if e ao else
            // foi removido para o final
            // await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
        }

        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));

    }


    return(        
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    // Aula5 - 55:05
                    //source={{ uri: 'https://github.com/diego3g.png'}}
                    source={{uri: teacher.avatar}}
                />

                <View style={styles.profileInfo}>
                    {/* <Text style={styles.name}>Diego Fernandes</Text> */}
                    {/* Aula5 - 55:09 */}
                    <Text style={styles.name}>{teacher.name}</Text>
                    <Text style={styles.subject}>{teacher.subject}</Text>
                </View>
            </View>

            {/* Aula5 - 9:59 */}
            {/* <Text style={styles.bio}>
                Entusiasta das melhores tecnologias de química avançada
                {'\n'} {'\n'}
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiência...
            </Text> */}
            {/* Aula5 - 55:22 */}
            <Text style={styles.bio}>{teacher.bio}</Text>
            {/* Aula5 - 12:06 */}
            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora: {'   '} 
                    {/* Aula5 - 55:24 */}
                    {/* <Text style={styles.priceValue}>20,00</Text> */}
                    <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
                </Text>

                {/* Aula5 - 12:47 */}
                <View style={styles.buttonsContainer}>
                    {/* Aula5 - 21:47 adicionando o array ao style */}
                    {/* Aula5 - 1:12:00 - condicionando os estilos */}
                    {/* <RectButton style={[styles.favoriteButton, styles.favorited]}> */}
                    <RectButton 
                        // Aula5 - 1:12:33 - onPress
                        onPress={handleToggleFavorite}
                        style={[
                            styles.favoriteButton
                            , isFavorited ? styles.favorited : {}]}
                    >
                        {/* Aula5 - 21:20 */}
                        {/* <Image source={heartOutlineIcon} /> */}
                        {/* Aula5 - 1:11:23 - Codicionando a imagem */}                    
                        {/* <Image source={unfavoriteIcon} /> */}
                        { isFavorited 
                            ? <Image source={unfavoriteIcon} />  
                            : <Image source={heartOutlineIcon} />
                        } 
                    </RectButton>

                    <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato.</Text>
                    </RectButton>
                </View>

            </View>
            
        </View>
    );
}

export default TeacherItem;
