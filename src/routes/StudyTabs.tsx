// Aula4 - 1:17:11 - Navegação em Abas: StudyTabs
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Aula4 - 1:18:48 - não sei pq o autoimport trouxe 
import TeacherList from '../pages/TeacherList';

// Aula4 - 1:18:56
import Favorites from '../pages/Favorites';

// Aula4 - 1:25:40 - Alteracao no StudyTabs.tsx :  importacao de ícones
import { Ionicons } from '@expo/vector-icons'; 


const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return(
        // Aula4 - 1:18:29 nao será necessario NavigationContainer neste caso
        // Aula4 - 1:22:09 - tabBarOptions e estilo do container das abas
        // elevation semelhante ao boxShadow
        // no ios usar o shadowOpacity: 0
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0
                    , shadowOpacity: 0
                    , height: 64
                    , 
                }
                , tabStyle: {
                    flexDirection: 'row'
                    , alignItems: 'center'
                    , justifyContent: 'center'
                    , 
                }
                , iconStyle: {
                    flex: 0
                    , width: 20
                    , height: 20
                    ,
                }
                , labelStyle: {
                    fontFamily: 'Archivo_700Bold'
                    , fontSize: 13
                    , marginLeft: 16
                    ,
                }
                , inactiveBackgroundColor: '#fafafc'
                , activeBackgroundColor: '#ebedf5'
                , inactiveTintColor: '#c1bccc'
                // Aula4 - 1:25:03
                // , activeTintColor: '#32264d'
                , activeTintColor: '#04d361'

            }}
        >
{/* 
            Aula4 - 1:25:40 - Alteracao no StudyTabs.tsx :  importacao de ícones
            Adicionando ícones
            <Screen name="TeacherList" component={TeacherList}/>
            <Screen name="Favorites" component={Favorites}/>
 */}
            <Screen 
                name="TeacherList" 
                component={TeacherList}
                options={{
                    tabBarLabel: 'Proffys'

                    // Aula4 - 1:40:13 - focused
                    , tabBarIcon: ({color, size, focused }) => {
                        return(
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />

            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos.'
                    , tabBarIcon: ({color, size, focused }) => {
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
                        );
                    }
                }}
            />

        </Navigator>
    );
}

export default StudyTabs;