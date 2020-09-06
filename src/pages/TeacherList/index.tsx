// Aula4 - 1:16:14
import React from 'react';
import {View, Text} from 'react-native';

// Aula4 - 1:21:01
import styles from './styles';

// Aula4 - 1:34:03
import PageHeader from '../../components/PageHeader';


function TeacherList() {

    return(
        <View style={styles.container}>
            <PageHeader title='Proffys disponíveis'/>
        </View>
    );
}

export default TeacherList;
