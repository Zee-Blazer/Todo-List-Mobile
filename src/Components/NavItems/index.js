
import { View, Text } from 'react-native';

// Styling
import { styled as HomeStyle } from '../Styles/style';

export const NavItems = ({ type }) => {

    return (
        <>
            <View style={ HomeStyle.NavCont }>
                <View style={ HomeStyle.NavItemActive }>
                    <Text style={ HomeStyle.NavItem }>Hourly</Text>
                </View>
                
                <Text style={ HomeStyle.NavItem }>Daily</Text>
                <Text style={ HomeStyle.NavItem }>Weekly</Text>
                <Text style={ HomeStyle.NavItem }>Monthly</Text>
            </View>

            { type == "History" && <View style={ HomeStyle.NextNavCont }>
                <View style={ HomeStyle.NextNavItemActive }>
                    <Text style={ HomeStyle.NavItem }>Completed</Text>
                </View>
                
                <Text style={ HomeStyle.NavItem }>Uncompleted</Text>
            </View> }
        </>
    )
}
