    import React, { useContext } from 'react'
    import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
    import { useNavigation } from '@react-navigation/native';

    import {TodoContext} from './App'

    const NewTodoScreen = () => {
        const { todo, setTodo, onAddTodo } = useContext(TodoContext)

        const nav = useNavigation()

        const styles = StyleSheet.create({
          container: {
            flex: 1, 
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'lightGrey',
          },
          input_group: {
            flex: 0.2,
            backgroundColor: 'white',
            padding: 16,
            borderRadius: 8
          },
          input_label: {
            fontSize: 16,
            textAlign: 'center',
          },
          input_ctrl: {
            borderWidth: 0.5, 
            borderColor: 'black',
            borderRadius: 4,
            marginVertical: 4
          }
        })

        return (
          <View style={styles.container}>
              <View style={styles.input_group}>
                  <Text style={styles.input_label}
                  >Name</Text>
                  <TextInput
                    style={styles.input_ctrl}
                    value={todo.name}
                    onChangeText={text => setTodo({...todo, ['title']: text})}
                  />
                  <Text style={styles.input_label}
                  >Description</Text>
                  <TextInput
                  style={styles.input_ctrl}
                  value={todo.description}
                  onChangeText={text => setTodo({...todo, ['description']: text})}
                  />
                  <Button 
                    title='Create'
                    onPress={() => {
                      onAddTodo()
                      nav.navigate('TodoList')
                    }}
                  />
              </View>

`          </View>
          )
    }

    export default NewTodoScreen

