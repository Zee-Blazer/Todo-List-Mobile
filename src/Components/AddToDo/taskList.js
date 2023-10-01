import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity } from "react-native";

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Expo icon
import { Ionicons } from '@expo/vector-icons';

// Theme
import { theme } from "../../Infrastructure/Theme";

// Styling
import { styled as HomeStyle } from "../Styles/style";

export const TaskList = ({ item, section, moment, type }) => {

    const [action, setAction] = useState(false);

    const completedTask = async () => {
        setAction(true);
        switch(section){
            case "Hourly": 
                const obj = await AsyncStorage.getItem("@history-hourly");
                if(obj == null){
                    await AsyncStorage.setItem("@history-hourly", JSON.stringify([
                        { task: item.task, time: moment, completed: true }
                    ]))
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-hourly"));
                    await AsyncStorage.setItem(
                        "@task-hourly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.time !== moment
                            )
                        )
                    );
                    setTimeout( () => setAction(false), 2000 )
                }
                else{
                    const newObj = JSON.parse(obj);
                    newObj.push({ task: item.task, time: moment, completed: true })
                    await AsyncStorage.setItem("@history-hourly", JSON.stringify(newObj));
                    
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-hourly"));
                    await AsyncStorage.setItem(
                        "@task-hourly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.time !== moment 
                            )
                        )
                    );
                    setTimeout( () => setAction(false), 2000 )
                }
                break;
            case "Daily":
                const obj2 = await AsyncStorage.getItem("@history-daily");
                if(obj2 == null){
                    await AsyncStorage.setItem("@history-daily", JSON.stringify([
                        { task: item.task, day: moment, completed: true }
                    ]))
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-daily"));
                    await AsyncStorage.setItem(
                        "@task-daily", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.day !== moment 
                            )
                        )
                    );
                    setTimeout( () => setAction(false), 2000 )
                }
                else{
                    const newObj = JSON.parse(obj2);
                    newObj.push({ task: item.task, time: item.time, completed: true })
                    await AsyncStorage.setItem("@history-daily", JSON.stringify(newObj));
                    
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-daily"));
                    await AsyncStorage.setItem(
                        "@task-daily", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.time !== item.time 
                            )
                        )
                    );
                    setTimeout( () => setAction(false), 2000 )
                }
                break;
            case "Weekly":
                
                break;
            case "Monthly":
                const obj3 = await AsyncStorage.getItem("@history-monthly");
                if(obj3 == null){
                    await AsyncStorage.setItem("@history-monthly", JSON.stringify([
                        { task: item.task, day: moment, completed: true }
                    ]))
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-monthly"));
                    await AsyncStorage.setItem(
                        "@task-monthly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.day !== moment 
                            )
                        )
                    );
                    setTimeout( () => setAction(false), 2000 )
                }
                else{
                    const newObj = JSON.parse(obj3);
                    newObj.push({ task: item.task, time: item.time, completed: true })
                    await AsyncStorage.setItem("@history-monthly", JSON.stringify(newObj));
                    
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-monthly"));
                    await AsyncStorage.setItem(
                        "@task-monthly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.month !== moment 
                            )
                        )
                    );
                    setTimeout( () => setAction(false), 2000 )
                }
                break;
        }
    }

    const deleteTask = async () => {
        switch(section){
            case "Hourly": 
                if(type == "Task"){
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-hourly"));
                    await AsyncStorage.setItem(
                        "@task-hourly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.time !== moment 
                            )
                        )
                    );
                }
                else {
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@history-hourly"));
                    await AsyncStorage.setItem(
                        "@history-hourly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.time !== moment 
                            )
                        )
                    );
                }
                break;
            case "Daily": 
                if(type == "Task"){
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-daily"));
                    await AsyncStorage.setItem(
                        "@task-daily", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.day !== moment 
                            )
                        )
                    );
                }
                else {
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@history-daily"));
                    await AsyncStorage.setItem(
                        "@history-daily", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.day !== moment 
                            )
                        )
                    );
                }
                break;
            case "Monthly": 
                if(type == "Task"){
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@task-monthly"));
                    await AsyncStorage.setItem(
                        "@task-monthly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.month !== moment 
                            )
                        )
                    );
                }
                else {
                    const formerObj = JSON.parse(await AsyncStorage.getItem("@history-monthly"));
                    await AsyncStorage.setItem(
                        "@history-monthly", 
                        JSON.stringify(
                            formerObj.filter( ele => 
                                ele.task !== item.task && ele.month !== moment 
                            )
                        )
                    );
                }
                break;
        }
    }

    return (
        <>
            <View style={ HomeStyle.taskListCont }>
                <TouchableOpacity 
                    style={ HomeStyle.doneCont } 
                    onPress={ () => type == "Task" ? completedTask() : "" }
                >
                    { item.completed || action && <Ionicons 
                        name="checkmark-sharp" 
                        size={24} 
                        color={ theme.colors.icon.tertiary } 
                    /> }
                    { type == "History" && <Ionicons 
                            name="checkmark-sharp" 
                            size={24} 
                            color={ theme.colors.icon.tertiary } 
                        />  }
                </TouchableOpacity>

                <Text style={ HomeStyle.taskContent }>{ item.task }</Text>

                <View>
                    <TouchableOpacity onPress={ deleteTask }>
                        <Ionicons 
                            name="trash" 
                            size={24} 
                            color={ theme.colors.icon.danger } 
                            style={{ alignSelf: 'center', marginLeft: 6 }}
                        />
                    </TouchableOpacity>
                    <Text style={ HomeStyle.timerContent }>{ moment }</Text>
                </View>
            </View>
        </>
    )
}
