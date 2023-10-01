import React, { useState, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

import { FlatList, Text } from 'react-native';

// Components
import { TaskList } from "../AddToDo/taskList";

export const RenderItems = ({ section, hourly, daily, monthly, type }) => {

    let elements;

    switch(section){
        case "Hourly":
            elements = <>
                <FlatList 
                    data={ hourly }
                    renderItem={ ({item}) => 
                        <TaskList item={ item } section={ section } moment={ item.time } type={ type } /> 
                    }
                    keyExtractor={ item => item }
                />
            </>
            break;
        case "Daily":
            elements = <>
                <FlatList 
                    data={ daily }
                    renderItem={ ({item}) => 
                        <TaskList item={ item } section={ section } moment={ item.day } type={ type } /> 
                    }
                    keyExtractor={ item => item }
                />
            </>
            break;
        case "Weekly":
            elements = <></>
            break;
        case "Monthly":
            elements = <>
                <FlatList 
                    data={ monthly }
                    renderItem={ ({item}) => 
                        <TaskList item={ item } section={ section } moment={ item.month } type={ type } /> 
                    }
                    keyExtractor={ item => item }
                /></>
            break;
    }

    return elements;
}
