import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ModalSelector from 'react-native-modal-selector'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../../assets/styles/styles'
import { avatarPropsList, colors } from '../utils'

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
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <ModalSelector
                            data={avatarProp.selectors}
                            onChange={option => updateAvatarProps(avatarProp.label, option.value)}
                        >
                            <View style={[
                                styles.propValueView,
                                {backgroundColor: avatarProp.type === 'colors' ? colors[avatarProp.label][avatarProps[avatarProp.label]] : 'white'}]}>
                                <Icon name="pencil" size={18} />
                                <Text style={styles.propValueText}>
                                    {avatarProp.type === 'boolean'
                                        ? avatarProps[avatarProp.label]
                                            ? avatarProp.booleanLabels?.true
                                            : avatarProp.booleanLabels?.false
                                        : avatarProp.type === 'colors'
                                        ? null
                                        : avatarProps[avatarProp.label]}
                                </Text>
                            </View>
                        </ModalSelector>
                        {avatarProp.colors
                            ? <ModalSelector
                                style={{ paddingLeft: 10 }}
                                data={avatarProp.colors.selectors}
                                onChange={option => updateAvatarProps(avatarProp.colors.label, option.value)}
                            >
                                <TouchableOpacity style={[
                                    styles.colorViewSelectorBlock,
                                    { backgroundColor: colors[avatarProp.label][avatarProps[avatarProp.colors.label]] }]}>
                                    <Icon name="pencil" size={18} />
                                </TouchableOpacity>
                            </ModalSelector>
                            : <View></View>}
                    </View>
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