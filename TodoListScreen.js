import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from './App'
import TodoCard from './TodoCard'

const TodoListScreen = () => {

  const nav = useNavigation()
  const { todos } = useContext(TodoContext)

    return (
        <View>
          {todos && todos.map(todo => {
            return <TodoCard key={todo.id} todo={todo} />
          })}
          <Button 
            title="Add Todo"
            onPress={() => nav.navigate('NewTodo')}
            />
        </View>
    )
}

export default TodoListScreen