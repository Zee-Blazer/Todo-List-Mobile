
import { NavigationContainer } from '@react-navigation/native';

// Screen
import { TaskScreen } from '../../Screens/Task';
import { HistoryScreen } from '../../Screens/History';
import { CreateTaskScreen } from '../../Screens/Create';

// Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Drawer Navigator
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {

    return (
        <Drawer.Navigator
            screenOptions={{
                // headerShown: false
                headerTitle: ""
            }}
        >
            <Drawer.Screen name="Task" component={ TaskScreen } />
            <Drawer.Screen name="History" component={ HistoryScreen } />
        </Drawer.Navigator>
    )
}

export const MainNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name='Drawer' component={ DrawerStack } />
                <Stack.Screen name="Create" component={ CreateTaskScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
