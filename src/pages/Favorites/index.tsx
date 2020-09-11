// Aula4 - 1:16:49
// Aula5 - 1:20:02 useEffect
import React, { useState, useEffect } from 'react';

// Aula5 - 1:22:14 - para substituir o useEffect
import { useFocusEffect } from '@react-navigation/native'

import {View, Text, ScrollView} from 'react-native';

// Aula4 - 1:21:36
import styles from './styles';

// Aula4 - 1:37:28
import PageHeader from '../../components/PageHeader';

// Aula5 - 1:19:20
import TeacherItem, { Teacher } from '../../components/TeacherItem';

// Aula5 - 1:19:16
import AsyncStorage from '@react-native-community/async-storage';


function Favorites() {
    // Aula5 - 1:19:27
    const [favorites, setFavorites] = useState([])

    // Aula5 - 1:19:06
    // Aula5 - 1:16:45 - criar funcao
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            // Aula5-1:03:25
            if(response){
                const favoritedTeachers = JSON.parse(response);
                
                setFavorites(favoritedTeachers);
            }
        });    
    }

    // Aula5 - 1:20:10
    // useEffect(() => {
    //     loadFavorites();
    // }, []); 

    // Aula5 - 1:23:06
    useFocusEffect(() => {
        loadFavorites();
    });

    return(
        <View style={styles.container}>

            {/* Aula4 - 1:37:20 enviar o title */}
            <PageHeader title='Proffys Favoritos'/>

            {/* Aula5 - 20:43 copiar o conteudo abaixo do TeacherList */}

            {/* Aula5 - 18:36 - Inserir ScrollView */}
            {/* Aula5 - 18:55 - Definir style */}
            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16
                    , paddingBottom: 16
                    ,
                }}
            >
                {/* Aula5 - 5:01 - Inserir TeacherItem*/}
                {/* Aula5 - 1:20:24 */}
                {/* <TeacherItem /> */}
                {/* <TeacherItem /> */}
                {/* <TeacherItem /> */}
                {/* <TeacherItem /> */}
                {/* <TeacherItem />  */}

                {favorites.map( (teacher : Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}
                            favorited={true}                        
                        /> 
                    )
                })}
            </ScrollView>

        </View>
    );
}

export default Favorites;

