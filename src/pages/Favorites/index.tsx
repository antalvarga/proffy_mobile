import React from 'react';
import {View, Text} from 'react-native';

// Aula4 - 1:21:36
import styles from './styles';

// Aula4 - 1:37:28
import PageHeader from '../../components/PageHeader';


function Favorites() {
    return(
        <View style={styles.container}>

            {/* Aula4 - 1:37:20 enviar o title */}
            <PageHeader title='Meus Proffys Favoritos '/>

        </View>
    );
}

export default Favorites;

