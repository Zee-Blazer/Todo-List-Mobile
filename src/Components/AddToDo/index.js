
import { Ionicons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native';

// Theme
import { theme } from '../../Infrastructure/Theme';

// Styling
import { styled as HomeStyle } from '../Styles/style';

export const AddToDo = () => {

    return (
        <TouchableOpacity style={ HomeStyle.addToDo }>
            <Ionicons name="add-circle-sharp" size={58} color={ theme.colors.icon.common } />
        </TouchableOpacity>
    )
}
