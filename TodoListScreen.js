import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import {TodoContext} from './App'

const TodoListScreen = () => {

  const { todos } = useContext(TodoContext)

    return (
        <View>
        <Text>Todos</Text>
        {todos && todos.map(todo => {
          return(
            <View key={todo.id}>
              <Text>
                Todo# {todo.id.slice(0, 4)}
              </Text>
              <Text>
                {todo.name}
              </Text>
              <Text>
                {todo.description}
              </Text>
            </View>
          )
        })}
      </View>
    )
}

export default TodoListScreen