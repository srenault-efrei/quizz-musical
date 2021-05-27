import React from 'react'
import { View, Text } from 'react-native'
import ModalSelector from 'react-native-modal-selector'

import styles from '../../assets/styles/styles'
import { avatarPropsList } from '../utils'

const Avatar = (props) => {
    const { avatarProps, setAvatarProps } = props

    updateAvatarProps = (type, value) => {
        setAvatarProps(Object.assign({}, avatarProps, { [type]: value }))
        //console.log(avatarProps)
    }

    mapAvatarPropsList = () => {
        return avatarPropsList.map((avatarProp, key) => {
            return (
                <View key={key} style={styles.avatarPropView}>
                    <Text style={styles.propTitle}>{avatarProp.name} : </Text>
                    <ModalSelector
                        data={avatarProp.selectors}
                        onChange={option => updateAvatarProps(avatarProp.label, option.value)}
                    >
                        <Text>
                            {avatarProp.type === 'boolean'
                                ? avatarProps[avatarProp.label]
                                    ? avatarProp.booleanLabels?.true
                                    : avatarProp.booleanLabels?.false
                                : avatarProps[avatarProp.label]}
                        </Text>
                    </ModalSelector>
                </View>
            )
        })
    }

    return (
        <View>
            {mapAvatarPropsList()}
        </View>
    )
}

export default Avatar