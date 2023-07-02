import { ActivityIndicator, View } from "react-native/types";
import { style } from "./style";
import { theme } from "../../theme";

export function Loading() {
    return <View style={style.container}>
        <ActivityIndicator
            size={50} color={theme.colors.brand.blue} />
    </View>
}