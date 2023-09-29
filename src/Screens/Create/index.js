import React, { useState, useEffect } from 'react';

import { Text, View, TextInput, TouchableOpacity, ScrollView, Pressable } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

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
                console.log(task, `${data.getHours()<12 ? data.getHours()==0 ? "12":data.getHours() : data.getHours()-12}:${data.getMinutes()} ${data.getHours()>=0&&data.getHours()<12 ? "AM" : "PM"}`)
                break;
            case "Daily":
                console.log(task, day[data.getDay()])
                break;
            case "Weekly":
                console.log(task, data)
                break;
            case "Monthly":
                console.log(task, month[data.getMonth()])
                break;
        }
    }

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
