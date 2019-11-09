import React from 'react'
import { StyleSheet, FlatList, Text } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'friend #1', age: 30 },
        { name: 'friend #2', age: 52 },
        { name: 'friend #3', age: 12 },
        { name: 'friend #4', age: 59 },
        { name: 'friend #5', age: 34 },
        { name: 'friend #6', age: 32 },
        { name: 'friend #7', age: 27 },
        { name: 'friend #8', age: 53 },
        { name: 'friend #9', age: 30 },
    ]
    return <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>Name: {item.name} - Age: {item.age}</Text>
        }}
    />
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen