import React from 'react'
import { View, Text } from 'react-native'
import ModalSelector from 'react-native-modal-selector'

import styles from '../../assets/styles/styles'
import { hat, hatColor, hair, hairColor, lashes, eyes, eyebrows, mouth, lipColor, facialHair, skinTone, accessory, body, clothing, clothingColor, graphic } from '../utils'

const Avatar = (props) => {
    const { avatarProps, setAvatarProps } = props

    updateAvatarProps = (type, value) => {
        setAvatarProps(Object.assign({}, avatarProps, { [type]: value }))
        //console.log(avatarProps)
    }

    return (
        <View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Hat : </Text>
                <ModalSelector
                    data={hat}
                    onChange={option => updateAvatarProps("hat", option.value)}
                >
                    <Text>{avatarProps.hat}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Hat color : </Text>
                <ModalSelector
                    data={hatColor}
                    onChange={option => updateAvatarProps("hatColor", option.value)}
                >
                    <Text>{avatarProps.hatColor}</Text>
                </ModalSelector>
            </View>
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
                <Text style={styles.propTitle}>Hair color : </Text>
                <ModalSelector
                    data={hairColor}
                    onChange={option => updateAvatarProps("hairColor", option.value)}
                >
                    <Text>{avatarProps.hairColor}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Lashes : </Text>
                <ModalSelector
                    data={lashes}
                    onChange={option => updateAvatarProps("lashes", option.value)}
                >
                    <Text>{avatarProps.lashes ? 'true' : 'false'}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Eyes : </Text>
                <ModalSelector
                    data={eyes}
                    onChange={option => updateAvatarProps("eyes", option.value)}
                >
                    <Text>{avatarProps.eyes}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Eyebrows : </Text>
                <ModalSelector
                    data={eyebrows}
                    onChange={option => updateAvatarProps("eyebrows", option.value)}
                >
                    <Text>{avatarProps.eyebrows}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Mouth : </Text>
                <ModalSelector
                    data={mouth}
                    onChange={option => updateAvatarProps("mouth", option.value)}
                >
                    <Text>{avatarProps.mouth}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Lip color : </Text>
                <ModalSelector
                    data={lipColor}
                    onChange={option => updateAvatarProps("lipColor", option.value)}
                >
                    <Text>{avatarProps.lipColor}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Facial hair : </Text>
                <ModalSelector
                    data={facialHair}
                    onChange={option => updateAvatarProps("facialHair", option.value)}
                >
                    <Text>{avatarProps.facialHair}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Skin tone : </Text>
                <ModalSelector
                    data={skinTone}
                    onChange={option => updateAvatarProps("skinTone", option.value)}
                >
                    <Text>{avatarProps.skinTone}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Accessory : </Text>
                <ModalSelector
                    data={accessory}
                    onChange={option => updateAvatarProps("accessory", option.value)}
                >
                    <Text>{avatarProps.accessory}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Body : </Text>
                <ModalSelector
                    data={body}
                    onChange={option => updateAvatarProps("body", option.value)}
                >
                    <Text>{avatarProps.body}</Text>
                </ModalSelector>
            </View>
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Clothing : </Text>
                <ModalSelector
                    data={clothing}
                    onChange={option => updateAvatarProps("clothing", option.value)}
                >
                    <Text>{avatarProps.clothing}</Text>
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
            <View style={styles.avatarPropView}>
                <Text style={styles.propTitle}>Graphic : </Text>
                <ModalSelector
                    data={graphic}
                    onChange={option => updateAvatarProps("graphic", option.value)}
                >
                    <Text>{avatarProps.graphic}</Text>
                </ModalSelector>
            </View>
        </View>
    )
}

export default Avatar