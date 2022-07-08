import React, { useState } from 'react'
import { uuid } from 'uuidv4';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
    header: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    }
    
  });

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <TodoContext.Provider value={TodoContextValues}>
          <View 
            style={styles.header}
            >
            <Stack.Navigator>
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



