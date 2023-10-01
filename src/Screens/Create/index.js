import React, { useState, useEffect, useContext } from 'react';

import { Text, View, TextInput, TouchableOpacity, ScrollView, Pressable, Alert } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Context
import { ListContext } from '../../Services/list.context';

import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

// Styling
import { styled as HomeStyle } from '../../Components/Styles/style';

// Theme
import { theme } from '../../Infrastructure/Theme';

// Safe Area View
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import { NavItems } from '../../Components/NavItems';
import { InputField } from '../../Components/NavItems/renderInputField';

// Icons
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export const CreateTaskScreen = () => {

    const navigation = useNavigation();

    const currentTime = moment().format("MMMM-Do-h-a");
    const currentDay = moment().format("YYYY-MMMM-Do");
    const currentMonth = moment().format("YYYY-MMMM");

    // Context
    const { state, dispatch } = useContext(ListContext)

    const month = [
        "January","February","March","April",
        "May","June","July","August","September",
        "October","November","December"
    ];
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [task, setTask] = useState();
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [type, setType] = useState();
    const [data, setData] = useState();

    const [section, setSection] = useState("Hourly");

    const changeSection = (e) => {
        setSection(e);
        setShow(false);
        setData();
    }

    const toggleShow = (e) => {
        setType(e);
        setShow(!show);
    }

    const onChange = (e, selectedDate) => {
        setData(selectedDate);
        setShow(false);
    }

    const addTask = () => {
        switch(section){
            case "Hourly":
                if(!task){
                    Alert.alert("Information not filled", "Kindly enter your task");
                }
                else if(!data){
                    Alert.alert("Information not filled", "Kindly enter your time");
                }
                else{
                    const time = `${data.getHours()<12 ? data.getHours()==0 ? "12":data.getHours() : data.getHours()-12}:${data.getMinutes()} ${data.getHours()>=0&&data.getHours()<12 ? "AM" : "PM"}`;
                    dispatch({ 
                        type: "task-hourly", 
                        value: { 
                            header: `${day[data.getDay()]}-${month[data.getMonth()]}-${data.getHours()<12 ? data.getHours()==0 ? "12":data.getHours() : data.getHours()-12}-${data.getHours()>=0&&data.getHours()<12 ? "AM" : "PM"}`,
                            task, 
                            time
                        } 
                    })
                    navigation.goBack()
                }
                break;

            case "Daily":
                if(!task){
                    Alert.alert("Information not filled", "Kindly enter your task");
                }
                else if(!data){
                    Alert.alert("Information not filled", "Kindly enter your Day");
                }
                else{
                    const d = day[data.getDay()];
                    dispatch({ 
                        type: "task-daily", 
                        value: { 
                            header: `${data.getFullYear()}-${month[data.getMonth()]}-${day[data.getDay()]}`,
                            task, 
                            day: d
                        } 
                    })
                    navigation.goBack()
                }
                break;

            case "Weekly":
                console.log(task, data)
                break;

            case "Monthly":
                if(!task){
                    Alert.alert("Information not filled", "Kindly enter your task");
                }
                else if(!data){
                    Alert.alert("Information not filled", "Kindly enter your Month");
                }
                else{
                    const m = month[data.getMonth()];
                    dispatch({ 
                        type: "task-monthly", 
                        value: { 
                            header: `${data.getFullYear()}-${month[data.getMonth()]}}`,
                            task, 
                            month: m
                        } 
                    })
                    navigation.goBack()
                }

                break;

            default:
                console.log("No default");
                break;
        }
    }

    // useEffect( () => {
    //     dispatch({ type: "task-hourly", value: moment().format("MMMM-Do-h-a") });
    // }, [] )

    return (
        <SafeAreaView style={{ height: '100%' }}>

            <View style={ HomeStyle.createHeader }>
                <Ionicons 
                    name="chevron-back" 
                    size={28} 
                    color="gray" 
                    onPress={ () => navigation.goBack() } 
                />
                <Text style={ HomeStyle.createHeaderTitle }>Create Task</Text>
            </View>
            
            <ScrollView>


                <View style={ HomeStyle.inputContainer }>
                    <TextInput 
                        placeholder='What do you want to do?'
                        placeholderTextColor="black"
                        numberOfLines={4}
                        multiline
                        autoCorrect
                        onChangeText={ setTask }
                        style={ HomeStyle.createInput }
                    />
                </View>

                <NavItems section={ section } changeSection={ changeSection } />

                <View style={ HomeStyle.typeInputCont }>
                    <FontAwesome 
                        name="history" 
                        size={24} 
                        color={ theme.colors.icon.primary } 
                        style={{ marginRight: 12 }} 
                    />
                    <InputField 
                        section={section} 
                        toggleShow={ toggleShow } 
                        show={ show } 
                        info={ date }
                        data={ data }
                        month={ month }
                        day={ day }
                    />
                </View>

                {
                    show && <>
                        <Pressable>
                            <DateTimePicker 
                                mode={ type }
                                display='spinner'
                                value={ date }
                                onChange={ onChange }
                            />
                        </Pressable>
                    </>
                }

                <TouchableOpacity style={ HomeStyle.addTaskBtn } onPress={ addTask }>
                    <Ionicons name="add-sharp" size={24} color="white" />
                    <Text style={ HomeStyle.addTaskBtnText }>Add Task</Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    )
}
