import { View, Image, TextInput, TouchableOpacity, Text } from "react-native";
import { style } from "./style";
import logoImage from "../../assets/logo.png";
import { theme } from "../../theme";
import { MaterialCommunityIcons } from '@expo/vector-icons';

type HeaderProps = {
    task: string
    inputRef: React.RefObject<TextInput>
    onChangeText: (task: string) => void
    onPress: () => void
}

export function Header({ task, inputRef, onChangeText, onPress }: HeaderProps) {
    return <View style={style.headerContainer}>
        <Image source={logoImage}></Image>
        <View style={style.formulario}>
            <TextInput
                style={[style.input,
                inputRef.current?.isFocused() && task ? style.inputBorder : null]}
                placeholder="Digite aqui"
                placeholderTextColor={theme.colors.base.gray300}
                value={task}
                onChangeText={onChangeText}
                ref={inputRef}
                autoCorrect={false}
                onSubmitEditing={onPress}
                returnKeyType="done" />
            <TouchableOpacity style={style.button} onPress={onPress}>
                <MaterialCommunityIcons name="plus-circle-outline"
                    size={22} color={theme.colors.base.gray100}></MaterialCommunityIcons>
            </TouchableOpacity>
        </View>
    </View>
}