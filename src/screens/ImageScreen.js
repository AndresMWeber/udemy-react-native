import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    const images = [
        { name: 'friend #1', image: '../../assets/icon.png' },
        { name: 'friend #2', image: '../../assets/icon.png' },
        { name: 'friend #3', image: '../../assets/icon.png' },
        { name: 'friend #4', image: '../../assets/icon.png' },
        { name: 'friend #5', image: '../../assets/icon.png' },
        { name: 'friend #6', image: '../../assets/icon.png' },
        { name: 'friend #7', image: '../../assets/icon.png' },
        { name: 'friend #8', image: '../../assets/icon.png' },
        { name: 'friend #9', image: '../../assets/icon.png' },
    ]
    return (
        <FlatList
            keyExtractor={image => image.name}
            data={images}
            renderItem={({ item }) => {
                return <ImageDetail {...item} />
            }}
        />
    )
}

const styles = StyleSheet.create({})

export default ImageScreen