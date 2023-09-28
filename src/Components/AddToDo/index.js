
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Theme
import { theme } from '../../Infrastructure/Theme';

// Styling
import { styled as HomeStyle } from '../Styles/style';

export const AddToDo = () => {

    const navigate = useNavigation();

    return (
        <TouchableOpacity 
            style={ HomeStyle.addToDo } 
            onPress={ () => navigate.navigate("Create") }
        >
            <Ionicons name="add-circle-sharp" size={58} color={ theme.colors.icon.common } />
        </TouchableOpacity>
    )
}
