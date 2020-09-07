// Aula4 - 1:16:49
import React from 'react';
import {View, Text, ScrollView} from 'react-native';

// Aula4 - 1:21:36
import styles from './styles';

// Aula4 - 1:37:28
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


function Favorites() {
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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem /> 
            </ScrollView>

        </View>
    );
}

export default Favorites;

