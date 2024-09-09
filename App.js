import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import CustomDrawer from './components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


function Root() {
  
  const navigation = useNavigation();

  return (
       <Drawer.Navigator
    drawerContent={props => <CustomDrawer{...props}/>}
    screenOptions={{
      drawerActiveBackgroundColor: '#ed1b24',
      drawerActiveTintColor: '#ffffff',
      drawerInactiveTintColor: '#666666',
      headerStyle:{ 
        backgroundColor: '#ed1b24',
      },
      headerTintColor: "#ffffff",
    }
    }>
              <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Slow Food Macedonia',drawerIcon: ({focused}) => (
              <Ionicons
                 name="home"
                 size={21}
                 color={focused ? '#ffffff' : '#666666'}
              />
           ),
        }} />
       
              <Drawer.Screen name="MainEvents" component={NotificationsScreen} options={{ title: 'Test',  drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="calendar-sharp"
                 size={22}
                 color={focused ? '#ffffff' : '#666666'}
              />
           ),
        }}/> 
        <Drawer.Screen name="AboutBitola" component={NotificationsScreen} options={{ title: 'Test',  drawerIcon: ({focused, size}) => (
                  <Ionicons
                    name="information-circle"
                    size={23}
                    color={focused ? '#ffffff' : '#666666'}
                  />
              ),
            }}/>
          <Drawer.Screen name="Medium" component={NotificationsScreen} options={{ title: 'Test',  drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="share-social"
                 size={24}
                 color={focused ? '#ffffff' : '#666666'}
              />
           ),
        }}/>
          <Drawer.Screen name="AboutUs" component={NotificationsScreen} options={{ title: 'Test',  drawerIcon: ({focused, size}) => (
              <Ionicons
                 name="send"
                 size={24}
                 color={focused ? '#ffffff' : '#666666'}
              />
           ),
        }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return(
  <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{ 
          backgroundColor: '#449999',
        },
        headerTintColor: "#ffffff",
      }
      }> 
        <Stack.Screen  name="Home" component={Root} /*Call function as Stack.Screen*/
        options={{ headerShown: false }} /> 
        <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'ScreenOne',  headerStyle:{ 
          backgroundColor: '#A890AB',
        }, }}/>

      </Stack.Navigator>
  </NavigationContainer>
  
  );
}
