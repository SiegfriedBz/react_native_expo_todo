import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'


const TodoCard = ({ todo }) => {

    const styles = StyleSheet.create({
        title: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        body: {
            fontSize: 16,
        },
        box: {
            flex: 1,
        }
    })

    return (
        <View style={styles.box}>
            <Text style={styles.title}>

            </Text>
            <Text style={styles.body}>

            </Text>
            <Text style={styles.body}>

            </Text>

        </View>
    )
}