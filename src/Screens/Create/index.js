
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Styling
import { styled as HomeStyle } from '../../Components/Styles/style';

// Safe Area View
import { SafeAreaView } from 'react-native-safe-area-context';

// Icons
import { Ionicons } from '@expo/vector-icons';

export const CreateTaskScreen = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <View style={ HomeStyle.createHeader }>
                <Ionicons name="chevron-back" size={28} color="gray" onPress={ () => navigation.goBack() } />
                <Text style={ HomeStyle.createHeaderTitle }>Create Task</Text>
            </View>

            <View style={ HomeStyle.inputContainer }>
                <TextInput 
                    placeholder='What do you want to do?'
                    placeholderTextColor="black"
                    numberOfLines={4}
                    multiline
                    autoCorrect
                    style={ HomeStyle.createInput }
                />
            </View>

            <TouchableOpacity style={ HomeStyle.addTaskBtn }>
                <Ionicons name="add-sharp" size={24} color="white" />
                <Text style={ HomeStyle.addTaskBtnText }>Add Task</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
