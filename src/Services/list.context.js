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
            let data;
            if(obj == null){
                let newObj = {};
                newObj[`${value.header.toString()}`] = [{ task: value.task, time: value.time }];
                await AsyncStorage.setItem("@task-hourly", JSON.stringify(newObj))
            }
            else{
                const item = `${value.header.toString()}`;
                const mainObj = JSON.parse(obj);

                if(searchKeys(mainObj,item)){
                    mainObj[item].push({ task: value.task, time: value.time })
                    await AsyncStorage.setItem("@task-hourly", JSON.stringify(mainObj));
                    data = await AsyncStorage.getItem("@task-hourly");
                }
                else{
                    mainObj[item] = [{ task: value.task, time: value.time }]
                    await AsyncStorage.setItem("@task-hourly", JSON.stringify(mainObj));
                    data = await AsyncStorage.getItem("@task-hourly");
                }

            } 
            console.log(JSON.parse(data));
            // await AsyncStorage.setItem("@task-hourly", ""); //Erase Data
            return state;

        case "task-daily":
            const obj2 = await AsyncStorage.getItem("@task-daily");
            let data2;
            if(obj2 == null){
                let newObj = {};
                newObj[`${value.header.toString()}`] = [{ task: value.task, day: value.day }];
                await AsyncStorage.setItem("@task-daily", JSON.stringify(newObj))
            }
            else{
                const item = `${value.header.toString()}`;
                const mainObj = JSON.parse(obj);

                if(searchKeys(mainObj,item)){
                    mainObj[item].push({ task: value.task, day: value.day })
                    await AsyncStorage.setItem("@task-daily", JSON.stringify(mainObj));
                    data2 = await AsyncStorage.getItem("@task-daily");
                }
                else{
                    mainObj[item] = [{ task: value.task, day: value.day }]
                    await AsyncStorage.setItem("@task-daily", JSON.stringify(mainObj));
                    data2 = await AsyncStorage.getItem("@task-daily");
                }

            } 
            console.log(JSON.parse(data2));
            // await AsyncStorage.setItem("@task-daily", ""); // Erase Data
            
            return state;

        case "task-monthly":
            const obj3 = await AsyncStorage.getItem("@task-monthly");
            let data3;
            if(obj3 == null){
                let newObj = {};
                newObj[`${value.header.toString()}`] = [{ task: value.task, month: value.month }];
                await AsyncStorage.setItem("@task-monthly", JSON.stringify(newObj))
            }
            else{
                const item = `${value.header.toString()}`;
                const mainObj = JSON.parse(obj);

                if(searchKeys(mainObj,item)){
                    mainObj[item].push({ task: value.task, month: value.month })
                    await AsyncStorage.setItem("@task-monthly", JSON.stringify(mainObj));
                    data3 = await AsyncStorage.getItem("@task-monthly");
                }
                else{
                    mainObj[item] = [{ task: value.task, month: value.month }]
                    await AsyncStorage.setItem("@task-monthly", JSON.stringify(mainObj));
                    data3 = await AsyncStorage.getItem("@task-monthly");
                }

            } 
            console.log(JSON.parse(data3));
            // await AsyncStorage.setItem("@task-weekly", "");
            
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
