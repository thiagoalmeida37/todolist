import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Alert } from "react-native";
import { Header } from "../../components/header";
import { style } from "./styles";
import { Task } from "../../components/task";
import { useRef, useState } from "react";
import { taskDTO } from "../../dtos/taskDTO";
import { Empty } from "../../components/empty";
import { uuid } from "../../utils/uuid";

export function HomePage() {
    const [tasks, setTasks] = useState<taskDTO[]>([])
    const [newTask, setNewTask] = useState('')
    const newTaskInputRef = useRef<TextInput>(null)

    function handleTaskAdd() {
        if (newTask !== "") {
            setTasks((tasks) => [...tasks, { id: uuid(), isCompleted: false, title: newTask.trim() }])
            setNewTask('')
            newTaskInputRef.current?.blur()
        }
    }

    function handleTaskDone(id: string) {
        setTasks((task) => task.map((task) => {
            task.id === id ? (task.isComplete = !task.isComplete) : null
            return task
        }))
    }
    function handleTaskDelete(id: string) {
        Alert.alert('Excluir tarefa', 'Deseja excluir essa tarefa?', [
            {
                text: 'Sim',
                style: 'default',
                onPress: () => setTasks((tasks) => tasks.filter((task) => task.id !== id))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        setTasks((tasks) => tasks.filter((task) => task.id !== id))

    }
    const totalTasksCreated = tasks.length
    const totalTasksCompleted = tasks.filter(({ isComplete }) => isComplete,).length
    return (
        <View style={style.containerBody}>
            <Header
                inputRef={newTaskInputRef}
                task={newTask}
                onChangeText={setNewTask}
                onPress={handleTaskAdd} />
            <View style={style.tasksContainer}>
                <View style={style.info}>
                    <View style={style.row}>
                        <Text style={style.tasksCreated}>tarefas criadas</Text>
                        <View style={style.couterContainer}>
                            <Text style={style.couterText}>{totalTasksCreated}</Text>
                        </View>
                    </View>
                    <View style={style.row}>
                        <Text style={style.tasksDone}>tarefas concluidas</Text>
                        <View style={style.couterContainer}>
                            <Text style={style.couterText}>{totalTasksCompleted}</Text>
                        </View>
                    </View>
                </View>
                <FlatList data={tasks}
                    keyExtractor={(tasks) => tasks.id}
                    renderItem={({ item }) => (
                        <Task key={item.id}
                            {...item}
                            onTaskDone={() => handleTaskDone(item.id)}
                            onTaskDeleted={() => handleTaskDelete(item.id)} />
                    )}
                    ListEmptyComponent={Empty} />
            </View>
        </View>

    )
}