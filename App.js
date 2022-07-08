import React, { useState } from 'react'
import { uuid } from 'uuidv4';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TodoListScreen from './components/TodoListScreen';
import NewTodoScreen from './components/NewTodoScreen';

export const TodoContext = React.createContext()

export default function App() {

  const [todo, setTodo] = useState({
    title:'',
    description:'',
    isDone: false
  })
  const [todos, setTodos] = useState([])

  const Stack = createNativeStackNavigator();

  const onAddTodo = () => {
    setTodos([...todos, {...todo, id: uuid()}])
    setTodo({title:'', description:'', isDone: false})
  }

  const onToggleTodoIsDone = (_todo) => {
    let updatedTodo = {..._todo, isDone: !_todo.isDone}
    let newTodos = todos.filter(todo => todo.id !== _todo.id)
    setTodos([...newTodos, updatedTodo])
  }

  const onDeleteTodo = (_todo) => {
    let newTodos = todos.filter(todo => todo !== _todo )
    setTodos(newTodos)
  }

  const TodoContextValues = {
    todo,
    setTodo,
    todos,
    setTodos,
    onAddTodo, 
    onDeleteTodo,
    onToggleTodoIsDone
  }

  const styles = StyleSheet.create({
    header: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    }
  });

  return (
        <NavigationContainer>
        <TodoContext.Provider value={TodoContextValues}>
          <View 
            style={styles.header}
            >
            <Stack.Navigator initialRouteName='TodoList'
            >
              <Stack.Screen 
                name='TodoList'
                component={TodoListScreen}
              />
              <Stack.Screen 
                name='NewTodo'
                component={NewTodoScreen}
              />
            </Stack.Navigator>
          <StatusBar style="auto" />
          </View>
        </TodoContext.Provider>
    </NavigationContainer>
  );
}



