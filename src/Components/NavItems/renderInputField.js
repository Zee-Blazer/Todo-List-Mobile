import React, { useState } from 'react';

import { TextInput, Text } from "react-native";

// Styling
import { styled as HomeStyle } from "../Styles/style";

// Moment
import moment from 'moment';

import DateTimePicker from '@react-native-community/datetimepicker';

export const InputField = ({ section, toggleShow, show, info, data, day, month }) => {


    const [date, setDate] = useState(new Date());

    let template;

    switch(section){
        case "Hourly":
            template = <>
                <Text style={ HomeStyle.timeSelector }>
                    <Text style={{ color: 'black' }}>Now: </Text>{ moment().format('h:mm a') }
                </Text>
                <Text style={{ marginTop: 3, marginHorizontal: 6 }} > - </Text>
                <Text 
                    style={ HomeStyle.timeSelector }
                    onPress={ () => toggleShow("time") }
                >
                    <Text style={{ color: 'black' }}>To: </Text>{ 
                        !data ? 
                            moment().add(1, "hour").format('h:mm a') 
                            : 
                            `${data.getHours()<12 ? data.getHours()==0 ? "12":data.getHours() : data.getHours()-12}:${data.getMinutes()} ${data.getHours()>=0&&data.getHours()<12 ? "AM" : "PM"}` 
                    }
                </Text>
            </>
            break;
        case "Daily":   
            template = <>
                <Text style={ HomeStyle.timeSelector }>
                    <Text style={{ color: 'black' }}>Now: </Text>{ moment().format('dddd') }
                </Text>
                <Text style={{ marginTop: 3, marginHorizontal: 6 }}> - </Text>
                <Text 
                    style={ HomeStyle.timeSelector }
                    onPress={ () => toggleShow('date') }
                >
                    <Text style={{ color: 'black' }}>To: </Text> { !data ? moment().add(1, "d").format('dddd') : day[data.getDay()] }
                </Text>
            </>
            break;
        case "Weekly":
            template = <>
                <Text style={ HomeStyle.timeSelector }>From Today</Text>
                <Text style={{ marginTop: 3, marginHorizontal: 6 }}> - </Text>
                <DateTimePicker 
                    mode='date'
                    value={ date }
                />
            </>
            break;
        case "Monthly":
            template = <>
                <Text style={ HomeStyle.timeSelector }>
                    <Text style={{ color: "black" }}>Now: </Text>{ moment().format("MMMM") }
                </Text>
                <Text style={{ marginTop: 3, marginHorizontal: 6 }}> - </Text>
                <Text 
                    style={ HomeStyle.timeSelector }
                    onPress={ () => toggleShow('date') }
                ><Text style={{ color: 'black' }}>To: </Text>{ !data ? moment().add(1, "month").format("MMMM") : month[data.getMonth()] }</Text>
            </>
            break;
    }

    return template;
}

// isSame, isBefore, isSameOrBefore
// For week moment("2019-06-04").isBefore("2019-06-01", 'week')
