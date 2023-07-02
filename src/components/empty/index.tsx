import { Image, Text, View } from "react-native";
import clipboard from '../../assets/clipboard.png';
import { style } from "./style";

export function Empty() {
    return <View style={style.emptyContainer}>
        <Image source={clipboard} style={style.image} />
        <Text style={style.textBold}>
            Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={[style.textBold, style.textRegular]}>
            Crie tarefas e organize os itens a fazer
        </Text>
    </View>
}