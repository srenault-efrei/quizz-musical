import React from 'react'
import { View, Text } from 'react-native'
import ModalSelector from 'react-native-modal-selector'

import styles from '../../assets/styles/styles'
import { hair, clothingColor } from '../utils'

const Avatar = (props) => {
    const { avatarProps, setAvatarProps } = props

    updateAvatarProps = (type, value) => {
        setAvatarProps(Object.assign({}, avatarProps, { [type]: value }))
        console.log(avatarProps)
    }

    return (
        <View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Hair : </Text>
                <ModalSelector
                    data={hair}
                    onChange={option => updateAvatarProps("hair", option.value)}
                >
                    <Text>{avatarProps.hair}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Clothing color : </Text>
                <ModalSelector
                    data={clothingColor}
                    onChange={option => updateAvatarProps("clothingColor", option.value)}
                >
                    <Text>{avatarProps.clothingColor}</Text>
                </ModalSelector>
            </View>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
            <Text>Hello</Text>
        </View>
    )
}

export default Avatar