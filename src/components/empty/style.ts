import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const style = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        width: '100%',
        paddingVertical: 48,
        paddingHorizontal: 20,
        borderTopColor: theme.colors.base.gray400,
        borderEndColor: theme.colors.base.gray600,
        borderStartColor: theme.colors.base.gray600,
        borderBottomColor: theme.colors.base.gray600,
        borderWidth: 1
    },
    image: {
        marginBottom: 16
    },
    textBold: {
        fontSize: 14,
        color: theme.colors.base.gray300
    },
    textRegular: {
        // fontFamily:
    }
})