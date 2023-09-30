import React, { useState, useEffect } from 'react';

// Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import { TaskList } from "../AddToDo/taskList";

export const RenderItems = ({ section }) => {

    const [data, setData] = useState();

    useEffect( async () => {
        setData(JSON.parse(await AsyncStorage.getItem("@task-hourly")));
    }, [] )

    useEffect( () => {
        if(data) {
            for(let i =0; i<=data.length; i++){
                console.log(i);
            }
        }
    }, [data] )

    let elements;

    switch(section){
        case "Hourly":
            elements = <>
                <TaskList />
            </>
            break;
        case "Daily":
            elements = <></>
            break;
        case "Weekly":
            elements = <></>
            break;
        case "Monthly":
            elements = <></>
            break;
    }

    return elements;
}
