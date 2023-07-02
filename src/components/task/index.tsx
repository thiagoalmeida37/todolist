import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { style } from "./style";
import { theme } from "../../theme";
import { taskDTO } from "../../dtos/taskDTO";

type TasksProps = taskDTO & {
    onTaskDone: (id: string) => void
    onTaskDeleted: (id: string) => void
}

export function Task({ id, title, isComplete, onTaskDone, onTaskDeleted }: TasksProps) {
    return <View style={style.taskContainer}>
        <TouchableOpacity onPress={() => onTaskDone(id)}>
            <MaterialCommunityIcons
                name={isComplete ? "checkbox-marked-circle-outline" : 'checkbox-blank-circle-outline'}
                size={22} color={isComplete ? theme.colors.brand.purple : theme.colors.brand.blue} />
        </TouchableOpacity>

        <View style={style.textContainer}>
            <Text style={isComplete ? style.textDone : style.textCreated}>{title}</Text>
        </View>

        <TouchableOpacity onPress={() => onTaskDeleted(id)}>
            <MaterialCommunityIcons
                name="trash-can-outline" size={20} color={theme.colors.base.gray300} />
        </TouchableOpacity>
    </View>
}