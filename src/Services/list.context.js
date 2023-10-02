import React, { createContext, useReducer } from 'react';

// AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

const searchKeys = (obj, key) => {
    return !!obj[key];
}

// Reducer Function
const reducer = async (state, action) => {

    const { type, value } = action;

    switch(type){
        case "task": 
            await AsyncStorage.setItem(
                "@task", 
                JSON.stringify({ item: { date: "30th", month: "September", year: "2023" } })
            )
            console.log("Task", await AsyncStorage.getItem("@task"))
            return state;

        case "task-hourly": 
            const obj = await AsyncStorage.getItem("@task-hourly");
            // let data;
            // if(obj == null){
            //     let newObj = {};
            //     newObj[`${value.header.toString()}`] = [{ task: value.task, time: value.time }];
            //     await AsyncStorage.setItem("@task-hourly", JSON.stringify(newObj))
            // }
            // else{
            //     const item = `${value.header.toString()}`;
            //     const mainObj = JSON.parse(obj);

            //     if(searchKeys(mainObj,item)){
            //         mainObj[item].push({ task: value.task, time: value.time })
            //         await AsyncStorage.setItem("@task-hourly", JSON.stringify(mainObj));
            //         data = await AsyncStorage.getItem("@task-hourly");
            //     }
            //     else{
            //         mainObj[item] = [{ task: value.task, time: value.time }]
            //         await AsyncStorage.setItem("@task-hourly", JSON.stringify(mainObj));
            //         data = await AsyncStorage.getItem("@task-hourly");
            //     }

            // } 
            if(obj == null){
                await AsyncStorage.setItem("@task-hourly", JSON.stringify([
                    { task: value.task, time: value.time, completed: false }
                ]))
            }
            else{
                const newObj = JSON.parse(obj) //.push({ task: value.task, time: value.time, completed: false });
                newObj.push({ task: value.task, time: value.time, completed: false })
                await AsyncStorage.setItem("@task-hourly", JSON.stringify(newObj));
            }

            // await AsyncStorage.setItem("@task-hourly", ""); //Erase Data
            return state;

        case "task-daily":
            const obj2 = await AsyncStorage.getItem("@task-daily");
            if(obj2 == null){
                await AsyncStorage.setItem("@task-daily", JSON.stringify([
                    { task: value.task, day: value.day, completed: false }
                ]))
            }
            else{
                const newObj = JSON.parse(obj2) 
                newObj.push({ task: value.task, day: value.day, completed: false })
                await AsyncStorage.setItem("@task-daily", JSON.stringify(newObj));
            }
            // await AsyncStorage.setItem("@task-daily", ""); // Erase Data
            
            return state;

        case "task-monthly":
            const obj3 = await AsyncStorage.getItem("@task-monthly");
            if(obj3 == null){
                await AsyncStorage.setItem("@task-monthly", JSON.stringify([
                    { task: value.task, month: value.month, completed: false }
                ]))
            }
            else{
                const newObj = JSON.parse(obj3) //.push({ task: value.task, time: value.time, completed: false });
                newObj.push({ task: value.task, month: value.month, completed: false })
                await AsyncStorage.setItem("@task-monthly", JSON.stringify(newObj));
            }
            // await AsyncStorage.setItem("@task-monthly", "");
            
            return state;

        case "history":
            console.log("History")
            return state;
        default:
            return state;
    }

}

// Context Function
export const ListContext = createContext();

export const ListContextProvider = ({ children }) => {

    // Reducer
    const [state, dispatch] = useReducer(reducer, {})

    return (
        <ListContext.Provider
            value={{
                state, dispatch
            }}
        >
            { children }
        </ListContext.Provider>
    )
}
