
import { View, Text } from 'react-native';

// Expo icon
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// Theme
import { theme } from '../../Infrastructure/Theme';

// Styling
import { styled as HomeStyle } from '../Styles/style';

export const LogoHeader = ({ type }) => {

    return (
        <>
            <View style={ HomeStyle.LogoHead }>
                {
                    type == "Task" ? 
                        <Foundation name="clipboard-notes" size={74} color={ theme.colors.icon.secondary } /> :
                        <MaterialIcons name="history" size={74} color={ theme.colors.icon.primary } />
                }
                <View style={ HomeStyle.TextCont }>
                    <Text style={ HomeStyle.LogoHeadTitle }>{ type == "Task" ? "TODO LIST" : "History" }</Text>
                    <Text style={ HomeStyle.LogoHeadSubTitle }>
                        { type == "Task" ? "Create your list" : "View all records" }
                    </Text>
                </View>
            </View>
        </>
    )
}
