// Aula4 - 1:16:14
// Aula5 - 34:05 useState
import React, { useState, useEffect } from 'react';

// Aula5 - 18:36 - importacao da ScrollView
// Aula5 - 26:32 - TextInput
import {View, Text, ScrollView, TextInput} from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

// Aula4 - 1:34:03
import PageHeader from '../../components/PageHeader';

// Aula5 - 4:50
// Aula5 - 55:55
import TeacherItem, { Teacher } from '../../components/TeacherItem';

// Aula5 - 38:53
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

// Aula5 - 39:05
import { Feather } from '@expo/vector-icons';

// Aula5 - 50:19
import api from '../../services/api';

import Favorites from '../Favorites';

// Aula5 - 1:02:22
import AsyncStorage from '@react-native-community/async-storage';

// Aula4 - 1:21:01
import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';


function TeacherList() {

    // Aula5 - 33:44 criar estado para exibir os campos do filtro
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    // Aula5 - 1:01:24 - Alterar a TeacherList para carregar os favoritos
    // Aula5 - 1:06:27 - useState<number[]>
    const [favorites, setFavorites] = useState<number[]>([]);

    // Aula5 - 46:13 - criar um estado para cada campo do filtro
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    // Aula5 - 49:59 
    const [ teachers, setTeachers ] = useState([]);

    // Aula5 - 1:16:45 - criar funcao
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response => {
            // Aula5-1:03:25
            if(response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map( (teacher : Teacher) => {
                    return teacher.id;
                })
                
                setFavorites(favoritedTeachersIds);
            }
        });    
    }

    // Aula5 - 1:01:47 - Consultar no banco todos os professores que o usuário favoritou
    // Aula5 - 1:16:45 - enviado para loadFavorites
    //     useEffect(() => {
    //     AsyncStorage.getItem('favorites').then(response => {
    //         // Aula5-1:03:25
    //         if(response){
    //             const favoritedTeachers = JSON.parse(response);
    //             const favoritedTeachersIds = favoritedTeachers.map( (teacher : Teacher) => {
    //                 return teacher.id;
    //             })
                
    //             setFavorites(favoritedTeachersIds);
    //         }
    //     });
    // }, []);

    // Aula5 - 1:24:02
    useFocusEffect(() => {
        loadFavorites();
    });


    // Aula5 -     39:39
    function handleToggleFiltersVisible() {
        setIsFiltersVisible( !isFiltersVisible );
    }

    // Aula5 - 47:56 - função que será disparada cquando o usuário disparar o botão filtrar
    // Aula5 - 50:15
    // function handleFiltersSubmit() {
    async function handleFiltersSubmit() {    
        // Aula5 - 1:17:10 
        loadFavorites();
        
        // Aula5 - 50:12 - 
        // console.log({
        //     subject
        //     , week_day
        //     , time
        // })
        const response = await api.get('classes', {
            params: {
                subject
                , week_day
                , time
                ,
            }
        });

        // Aula5 - 56:56
        setIsFiltersVisible(false);
        
        //console.log(response.data);
        setTeachers(response.data);
    }

    return(
        <View style={styles.container}>
            {/* Aula5 - 24:59 */}
            {/* <PageHeader title='Proffys Disponíveis'/> */}
            <PageHeader 
                title='Proffys Disponíveis' 
                // Aula5 - 38:40
                // headerRight={<Text>Oi</Text>}
                headerRight={(
                    // Aula5 - 40:01 - onPress
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name='filter' size={20} color='#fff' />

                    </BorderlessButton>
                )}
            >
                {
                    isFiltersVisible && (

                        <View style={styles.searchForm}>
                            <Text style={styles.label}>Matéria</Text>
                            <TextInput 
                                style={styles.input}
                                // Aula5 - 46:56 Value
                                value={subject}
                                // Aula5 - 47:06
                                onChangeText={text => setSubject(text)}
                                placeholder="Qual a matéria?"
                                placeholderTextColor="#c1bccc"
                            />

                            {/* Aula5 - 27:08 */}
                            <View style={styles.inputGroup}>

                                <View style={styles.inputBlock}>

                                    <Text style={styles.label}>Dia da semana</Text>
                                    <TextInput 
                                        style={styles.input}
                                        // Aula5 - 47:36 Value
                                        value={week_day}
                                        onChangeText={text => setWeekDay(text)}

                                        placeholder="Qual o dia?"
                                        placeholderTextColor="#c1bccc"
                                    />

                                </View>


                                <View style={styles.inputBlock}>

                                    <Text style={styles.label}>Horário</Text>
                                    <TextInput 
                                        style={styles.input}
                                        // Aula5 - 47:49 Value
                                        value={time}
                                        onChangeText={text => setTime(text)}

                                        placeholder="Qual a hora?"
                                        placeholderTextColor="#c1bccc"
                                    />

                                </View>

                            </View>

                            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                                <Text style={styles.submitButtonText}>Filtrar</Text>
                            </RectButton>

                        </View>

                    )
                }

    
            </PageHeader>

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
                {/* <TeacherItem /> */}
                {/* <TeacherItem /> */}
                {/* <TeacherItem /> */}
                {/* <TeacherItem /> */ TeacherItem}

                {/* Aula5 - 53:08 - Exibindo os dados em tela */}
                { 
                    teachers.map((teacher : Teacher ) => {
                        return(
                            <TeacherItem 
                                key={teacher.id}
                                teacher={teacher}
                                favorited={favorites.includes(teacher.id)}
                            />
                        )
                    })
                }                

            </ScrollView>
            
        </View>
    );
}

export default TeacherList;
