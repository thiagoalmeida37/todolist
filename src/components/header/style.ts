import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const style = StyleSheet.create({
    headerContainer: {
        backgroundColor: theme.colors.base.gray700,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 173,
        position: "relative"
    },
    formulario: {
        width: "100%",
        position: "absolute",
        bottom: -54 / 2,
        height: 55,
        flexDirection: "row",
        // marginTop:36,
        // marginBottom:42,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        backgroundColor: theme.colors.base.gray500,
        height: 55,
        width: "75%",
        borderRadius: 5,
        color: "#fdfcfe",
        padding: 16,
        // flex:1,
        marginRight: 4,
        fontSize: theme.font_size.md,
        borderColor: theme.colors.base.gray700,
        borderWidth: 1
    },
    inputBorder: {
        borderColor: theme.colors.brand.purple,

    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: theme.colors.brand.blue_dark,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 24
    },
})