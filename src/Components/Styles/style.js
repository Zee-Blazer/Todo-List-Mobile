
// Theme
import { theme } from "../../Infrastructure/Theme";

import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
    body: {
        backgroundColor: theme.colors.bg.primary,
        flex: 1,
        height: 100,
        padding: 4
    },
    LogoHead: {
        borderRadius: 12,
        backgroundColor: theme.colors.bg.tertiary,
        padding: 12,
        width: 364,
        marginHorizontal: "auto",
        marginVertical: 12,
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: "center"
    },
    LogoHeadTitle: {
        fontFamily: theme.fonts.body,
        fontSize: theme.fontSizes.h5,
        fontWeights: theme.fontWeights.bold,
        color: theme.colors.text.primary
    },
    LogoHeadSubTitle: {
        color: theme.colors.text.primary,
        fontSize: theme.fontSizes.sm
    },
    TextCont: {
        marginLeft: 28,
        marginTop: 15
    },
    NavCont: {
        flexDirection: 'row',
        paddingHorizontal: 36,
        marginTop: theme.space[4],
        marginBottom: theme.space[6]
    },
    NextNavCont: {
        flexDirection: 'row',
        paddingHorizontal: 36,
        marginTop: theme.space[4],
        marginBottom: theme.space[6],
        backgroundColor: theme.colors.bg.common,
        paddingVertical: 7
    },
    NavItem: {
        fontSize: theme.fontSizes.lg,
        fontWeight: theme.fontWeights.bold,
        color: theme.colors.text.secondary,
        marginHorizontal: theme.space[5],
        fontFamily: theme.fonts.heading
    },
    NavItemActive: {
        borderBottomColor: theme.colors.borders.secondary,
        borderBottomWidth: 3,
        paddingBottom: 6
    },
    NextNavItemActive: {
        backgroundColor: theme.colors.bg.uncommon
    },
    addToDo: {
        position: 'absolute',
        top: '86%',
        left: '78%',
        zIndex: 5
    },
    taskListCont: {
        borderTopColor: theme.colors.borders.primary,
        borderTopWidth: 3,
        borderRadius: 8,
        padding: 12,
        width: 364,
        marginHorizontal: "auto",
        marginVertical: 8,
        alignSelf: "center",
        backgroundColor: theme.colors.bg.secondary,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    doneCont: {
        width: 28,
        height: 28,
        borderWidth: 2,
        borderColor: theme.colors.borders.secondary,
        borderRadius: 4,
        flex: .1,
        alignContent: 'center'
    },
    taskContent: {
        flex: .8,
        marginTop: 4,
        fontSize: theme.fontSizes.medium,
        color: theme.colors.text.secondary,
        fontFamily: theme.fonts.body
    },
    timerContent: {
        color: theme.colors.text.danger, 
        textAlign: 'left',
        fontSize: theme.fontSizes.xsm
    },
    createHeader: {
        flexDirection: "row",
        paddingHorizontal: 6
    },
    createHeaderTitle: {
        textAlign: 'center',
        flex: 1,
        fontSize: theme.fontSizes.lg,
        marginTop: 5,
        marginRight: 29,
        fontFamily: theme.fonts.body,
        fontWeight: theme.fontWeights.bold,
        color: "gray", //theme.colors.text.secondary
    },
    createInput: {
        width: '100%',
        height: 28
    },
    inputContainer: {
        width: '80%',
        marginVertical: 14,
        marginHorizontal: "10%",
        backgroundColor: theme.colors.bg.secondary,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 8,
        marginTop: 42
    },
    addTaskBtn: {
        backgroundColor: theme.colors.bg.tertiary,
        width: 224,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
        borderRadius: 8,
        marginTop: 489,
        left: '16%'
    },
    addTaskBtnText: {
        color: theme.colors.text.primary,
        marginTop: 2,
        fontSize: theme.fontSizes.lg,
        marginLeft: 2
    }
});
