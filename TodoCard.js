import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, CheckBox } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from './App'

const TodoCard = ({ todo }) => {

    const { onDeleteTodo, onToggleTodoIsDone } = useContext(TodoContext)
    
    const styles = StyleSheet.create({
        container: {
            flex: 1, 
            alignItems: 'center',
            backgroundColor: 'white',
            borderColor: 'black',
            margin: 8,
            padding: 8,
          }
    })

    return (
        <View style={styles.container}>
            <View>
                <Text>{todo.title}</Text>
                <Text>{todo.description}</Text>
                <CheckBox   
                    defaultValue='false'
                    value={todo.isDone}
                    onValueChange={() => onToggleTodoIsDone(todo)}
                />
            </View>
            <Button 
                title="Delete"
                onPress={() => onDeleteTodo(todo)}
            />
        </View>
    )
}

export default TodoCard