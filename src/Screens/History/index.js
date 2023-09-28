
import { SafeAreaView } from 'react-native-safe-area-context';

// Stylings
import { styled as HomeStyle } from '../../Components/Styles/style';

import { View, Text } from "react-native";

// Components
import { LogoHeader } from '../../Components/LogoHeader'; // The Header Logo with it's title
import { NavItems } from '../../Components/NavItems'; // The Navigation items for task duration
import { AddToDo } from '../../Components/AddToDo'; // Create new List button
import { TaskList } from '../../Components/AddToDo/taskList'; // The list of task created by the user

export const HistoryScreen = () => {

    return (
        <View style={ HomeStyle.body }>
            <LogoHeader type="History" />
            <NavItems type="History" />

            <TaskList />
            <TaskList />
        </View>
    )
}
