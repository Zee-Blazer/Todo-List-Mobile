import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

// Stylings
import { styled as HomeStyle } from '../../Components/Styles/style';

import { View, Text, ScrollView } from "react-native";

// Components
import { LogoHeader } from '../../Components/LogoHeader'; // The Header Logo with it's title
import { NavItems } from '../../Components/NavItems'; // The Navigation items for task duration
import { AddToDo } from '../../Components/AddToDo'; // Create new List button
import { TaskList } from '../../Components/AddToDo/taskList'; // The list of task created by the user
import { RenderItems } from '../../Components/NavItems/renderItems';

export const TaskScreen = () => {

    const [section, setSection] = useState("Hourly");

    const changeSection = (e) => setSection(e);

    return (
        <View style={ HomeStyle.body }>
            <LogoHeader type="Task" />
            <NavItems type="Task" section={ section } changeSection={ changeSection } />
            <AddToDo />

            <ScrollView>
                <RenderItems section={ section } />
            </ScrollView>
        </View>
    )
}
