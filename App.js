import React, { useState } from 'react'
import { uuid } from 'uuidv4';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from 'react-navigation-stack';

import TodoListScreen from './TodoListScreen';
import NewTodoScreen from './NewTodoScreen';

export const TodoContext = React.createContext()

export default function App() {

  const [todo, setTodo] = useState({
    name:'',
    description:''
  })
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, {...todo, id: uuid()}])
    setTodo({name:'', description:''})
    alert("Todo created")
  }

  const TodoContextValues = {
    todo,
    setTodo,
    todos,
    setTodos,
    handleSubmit
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
        <TodoContext.Provider value={TodoContextValues}>
          <View style={styles.container}>
            <TodoListScreen />
            <NewTodoScreen />
          <StatusBar style="auto" />
          </View>
        </TodoContext.Provider>
  );
}



