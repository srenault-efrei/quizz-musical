import * as React from "react"
import { View, ImageBackground, TouchableOpacity, Text } from 'react-native'
import Avatar from '../components/Avatar'
import Mode from '../components/Mode'
import PersonalizeAvatar from '../components/PersonalizeAvatar'
import { avatarPropsInit } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, Input } from 'galio-framework'

import styles from '../../assets/styles/styles'


const image = { uri: "https://img.pixers.pics/pho_wat(s3:700/FO/64/91/41/38/700_FO64914138_bc4676ea52e53b3a655d1beeadca1e88.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/papiers-peints-fond-musical-colore.jpg.jpg" };

const Home = () => {
    const [avatarProps, setAvatarProps] = React.useState(avatarPropsInit)
    const [avatarName, setAvatarName] = React.useState('Anonymous')
    const [isModifyAvatar, setModifyAvatar] = React.useState(false)

    const getAvatarStorage = async () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem('avatar')
                .then(avatar => {
                    if (avatar != null) {
                        avatar = JSON.parse(avatar)
                        setAvatarProps(avatar.avatarProps)
                        setAvatarName(avatar.avatarName)
                    } else {
                        storeAvatar()
                    }

                    resolve(avatarProps, avatarName)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    const storeAvatar = async () => {
        try {
            await AsyncStorage.setItem('avatar', JSON.stringify({
                avatarProps,
                avatarName
            }))
        } catch (error) {
            console.log('Local storage data Error : ', error)
        }
    }

    React.useEffect(() => {
        getAvatarStorage()
    }, [])

    cancelModifyAvatar = () => {
        getAvatarStorage()
        setModifyAvatar(!isModifyAvatar)
    }

    validModifyAvatar = () => {
        storeAvatar()
        setModifyAvatar(!isModifyAvatar)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.content}>
                    <View style={styles.avatar}>
                        <Avatar avatarProps={avatarProps} />
                        {isModifyAvatar
                            ? <Input
                                rounded
                                placeholder={avatarName}
                                placeholderTextColor='black'
                                icon="pencil"
                                family="Entypo"
                                iconSize={14}
                                style={styles.inputName}
                                onSubmitEditing={event => setAvatarName(event.nativeEvent.text)} />
                            : <View style={styles.avatarNameView}>
                                <Text style={styles.avatarName}>{avatarName}</Text>
                            </View>}


                        {isModifyAvatar
                            ? <View style={{ flexDirection: 'row' }}>
                                <Button radius="10" size="small" color="#ccc" onPress={() => cancelModifyAvatar()}>Annuler</Button>
                                <Button radius="10" size="small" color="success" onPress={() => validModifyAvatar()}>Valider</Button>
                            </View>
                            : <Button radius="10" size="small" style={{ backgroundColor: '#ccc' }} onPress={() => setModifyAvatar(!isModifyAvatar)}>Modifier</Button>}
                    </View>
                    <View style={styles.mode}>
                        {isModifyAvatar
                            ? <PersonalizeAvatar avatarProps={avatarProps} setAvatarProps={setAvatarProps} />
                            : <Mode />}
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}


export default Home