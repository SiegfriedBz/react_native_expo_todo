import React, { useContext } from 'react'
import { ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { TodoContext } from '../App'
import TodoCard from './TodoCard'

const TodoListScreen = () => {

  const nav = useNavigation()
  const { todos } = useContext(TodoContext)

    return (
        <ScrollView>
          {todos && todos.map(todo => {
            return <TodoCard key={todo.id} todo={todo} />
          })}
          <Button 
            title="Add Todo"
            onPress={() => nav.navigate('NewTodo')}
            />
        </ScrollView>
    )
}

export default TodoListScreen