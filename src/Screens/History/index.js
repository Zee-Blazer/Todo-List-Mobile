import React, { useState, useEffect } from 'react';

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

import AsyncStorage from '@react-native-async-storage/async-storage';

export const HistoryScreen = () => {

    const [section, setSection] = useState("Hourly");

    const changeSection = (e) => setSection(e);

    const [refresh, setRefreshing] = useState(false);
    const [hourly, setHourly] = useState();
    const [daily, setDaily] = useState();
    const [monthly, setMonthly] = useState();

    useEffect( async () => {
        setHourly(JSON.parse(await AsyncStorage.getItem("@history-hourly")));
        setDaily(JSON.parse(await AsyncStorage.getItem("@history-daily")));
        setMonthly(JSON.parse(await AsyncStorage.getItem("@history-monthly")));
    }, [] )

    const refreshing = async () => {
        setHourly(JSON.parse(await AsyncStorage.getItem("@history-hourly")));
        setDaily(JSON.parse(await AsyncStorage.getItem("@history-daily")));
        setMonthly(JSON.parse(await AsyncStorage.getItem("@history-monthly")));
        setRefresh(false);
    }

    useEffect( () => {
        if(hourly){
            console.log("Is True");
        }
        else{
            console.log("Is not true");
        }
    }, [hourly] )

    return (
        <View style={ HomeStyle.body }>
            <LogoHeader type="History" />
            <NavItems type="History" section={ section } changeSection={ changeSection } />

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
                    type="History"
                />
            </ScrollView>
        </View>
    )
}
