// Aula4 - 1:16:14
import React from 'react';

// Aula5 - 18:36 - importacao da ScrollView
import {View, Text, ScrollView} from 'react-native';

// Aula4 - 1:34:03
import PageHeader from '../../components/PageHeader';

// Aula5 - 4:50
import TeacherItem from '../../components/TeacherItem';


// Aula4 - 1:21:01
import styles from './styles';

function TeacherList() {

    return(
        <View style={styles.container}>
            <PageHeader title='Proffys Disponíveis'/>

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

export default TeacherList;
