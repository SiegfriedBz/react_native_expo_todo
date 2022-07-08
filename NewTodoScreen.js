    import React, { useContext } from 'react'
    import { View, Text, TextInput, Button } from 'react-native'
    import {TodoContext} from './App'

    const NewTodoScreen = () => {
        const { todo, setTodo, handleSubmit } = useContext(TodoContext)

        return (
            <View>
            <Text>Create new Todo</Text>
            <TextInput
              value={todo.name}
              onChangeText={text => setTodo({...todo, ['name']: text})}
              />
            <TextInput
              value={todo.description}
              onChangeText={text => setTodo({...todo, ['description']: text})}
            />
            <Button 
              title='Submit'
              onPress={handleSubmit}
            />
          </View>
          )
    }

    export default NewTodoScreen

