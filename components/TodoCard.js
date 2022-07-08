import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button, CheckBox } from 'react-native'
import { TodoContext } from '../App'

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
            <View
                style={{flex: 1, flexDirection: "row", margin: 16}}
            >
                <Text style={{margin: 8}}>{todo.title}</Text>
                <Text style={{margin: 8}}>{todo.description}</Text>
                <CheckBox   
                    style={{margin: 8}}
                    value={todo.isDone || false}
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