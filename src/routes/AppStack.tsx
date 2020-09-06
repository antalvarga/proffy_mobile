// Aula4 - 55:36 - Criar arquivo AppStack.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Aula4 - 57:20
import Landing from '../pages/Landing';

// Aula4 - 1:00:30
import GiveClasses from '../pages/GiveClasses';

// Aula4 - 1:19:14
import StudyTabs from './StudyTabs';


// Aula4 - 56:43
// const AppStackNavigation = createStackNavigator();
const { Navigator, Screen } = createStackNavigator();


// Aula4 - 56:49
function AppStack() {

    // Aual4 - 56:58
    return(
        <NavigationContainer>
            {/* Aula4 59:20 - Desabilitar esse cabeçalho com screenOptions conforme abaixo   */}
            <Navigator screenOptions={{ headerShown: false}}>
                <Screen name="Landing" component={Landing}/>
                {/* Aula4 - 1:01:01 */}
                <Screen name="GiveClasses" component={GiveClasses}/>

                {/* Aula4 - 1:19:06 - Alteracao na AppStack para incluir StudyTabs */}
                <Screen name="Study" component={StudyTabs} />
            </Navigator>
        </NavigationContainer>


    );
}

export default AppStack;
