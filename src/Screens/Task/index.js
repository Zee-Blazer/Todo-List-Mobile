import React, { useState, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SafeAreaView } from 'react-native-safe-area-context';

// Stylings
import { styled as HomeStyle } from '../../Components/Styles/style';

import { View, Text, ScrollView, RefreshControl } from "react-native";

// Components
import { LogoHeader } from '../../Components/LogoHeader'; // The Header Logo with it's title
import { NavItems } from '../../Components/NavItems'; // The Navigation items for task duration
import { AddToDo } from '../../Components/AddToDo'; // Create new List button
import { TaskList } from '../../Components/AddToDo/taskList'; // The list of task created by the user
import { RenderItems } from '../../Components/NavItems/renderItems';

export const TaskScreen = () => {

    const [section, setSection] = useState("Hourly");

    const [refresh, setRefresh] = useState(false);
    const [hourly, setHourly] = useState();
    const [daily, setDaily] = useState();
    const [monthly, setMonthly] = useState();

    const changeSection = (e) => setSection(e);

    useEffect( async () => {
        setHourly(JSON.parse(await AsyncStorage.getItem("@task-hourly")));
        setDaily(JSON.parse(await AsyncStorage.getItem("@task-daily")));
        setMonthly(JSON.parse(await AsyncStorage.getItem("@task-monthly")));
    }, [] )

    const refreshing = async () => {
        setHourly(JSON.parse(await AsyncStorage.getItem("@task-hourly")));
        setDaily(JSON.parse(await AsyncStorage.getItem("@task-daily")));
        setMonthly(JSON.parse(await AsyncStorage.getItem("@task-monthly")));
        setRefresh(false);
    }

    return (
        <View style={ HomeStyle.body }>
            <LogoHeader type="Task" />
            <NavItems type="Task" section={ section } changeSection={ changeSection } />
            <AddToDo />

            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={ refreshing } />
                }
            >
                <RenderItems 
                    section={ section } 
                    hourly={ hourly } 
                    daily={ daily }
                    monthly={ monthly }
                    type="Task"
                />
            </ScrollView>
        </View>
    )
}
