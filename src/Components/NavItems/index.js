
import { View, Text, TouchableOpacity } from 'react-native';

// Styling
import { styled as HomeStyle } from '../Styles/style';

export const NavItems = ({ type, changeSection, section }) => {

    const itemDisplay = [
        { text: "Hourly", section: "Hourly" },
        { text: "Daily", section: "Daily" },
        { text: "Weekly", section: "Weekly" },
        { text: "Monthly", section: "Monthly" },
    ];

    return (
        <>
            <View style={ HomeStyle.NavCont }>

                { itemDisplay && itemDisplay.map( (item, i) => (
                    <TouchableOpacity key={i} onPress={ () => changeSection(item.section) }>
                        { 
                            section == item.section ? 
                                <View style={ HomeStyle.NavItemActive }>
                                    <Text style={ HomeStyle.NavItem }>{ item.text }</Text>
                                </View> :
                                <Text style={ HomeStyle.NavItem }>{ item.text }</Text> 
                        }
                    </TouchableOpacity>
                ) ) }

            </View>

            {/* { type == "History" && <View style={ HomeStyle.NextNavCont }>
                <View style={ HomeStyle.NextNavItemActive }>
                    <Text style={ HomeStyle.NavItem }>Completed</Text>
                </View>
                
                <Text style={ HomeStyle.NavItem }>Uncompleted</Text>
            </View> } */}
        </>
    )
}
