import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ name, image }) => {
    return (
        <View>
            <Image source={require('../../assets/icon.png')} />
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetail