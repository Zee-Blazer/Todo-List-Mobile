
import { View, Text, TouchableOpacity } from "react-native";

// Expo icon
import { Ionicons } from '@expo/vector-icons';

// Theme
import { theme } from "../../Infrastructure/Theme";

// Styling
import { styled as HomeStyle } from "../Styles/style";

export const TaskList = () => {

    return (
        <>
            <View style={ HomeStyle.taskListCont }>
                <TouchableOpacity style={ HomeStyle.doneCont }>
                    <Ionicons 
                        name="checkmark-sharp" 
                        size={24} 
                        color={ theme.colors.icon.tertiary } 
                    />
                </TouchableOpacity>

                <Text style={ HomeStyle.taskContent }>Hello World</Text>

                <View>
                    <TouchableOpacity>
                        <Ionicons 
                            name="trash" 
                            size={24} 
                            color={ theme.colors.icon.danger } 
                            style={{ alignSelf: 'center', marginLeft: 6 }}
                        />
                    </TouchableOpacity>
                    <Text style={ HomeStyle.timerContent }>06:00PM</Text>
                </View>
            </View>
        </>
    )
}
