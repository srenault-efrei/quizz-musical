import * as React from 'react'
import { View, ImageBackground, Text, Alert } from 'react-native'
import Avatar from '../components/Avatar'
import Mode from '../components/Mode'
import { Audio } from 'expo-av'
import * as Animatable from 'react-native-animatable'
import createGame from '../lib/createGame'
import joinPublicParty from '../lib/joinPublicParty'
import joinPrivateParty from '../lib/joinPrivateParty'
import createUser from '../lib/createUser'
import socket from '../lib/socket'
import { FontAwesome5 } from '@expo/vector-icons'
import TypeRoom from '../Modals/TypeRoom'
import PersonalizeAvatar from '../components/PersonalizeAvatar'
import { avatarPropsInit } from '../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Button, Input } from 'galio-framework'
import styles from '../../assets/styles/styles'

const Home = (props) => {
  const [sound, setSound] = React.useState()
  const [openModal, setOpenModal] = React.useState(false)

  const [avatarProps, setAvatarProps] = React.useState(avatarPropsInit)
  const [avatarName, setAvatarName] = React.useState('Anonymous')
  const [isModifyAvatar, setModifyAvatar] = React.useState(false)

  const [uuid, setUuid] = React.useState('')

  const image = {
    uri: 'https://img.pixers.pics/pho_wat(s3:700/FO/64/91/41/38/700_FO64914138_bc4676ea52e53b3a655d1beeadca1e88.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/papiers-peints-fond-musical-colore.jpg.jpg',
  }

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(require('../../assets/songs/home.mp3'))
    await sound.playAsync()
    setSound(sound)
  }

  const getAvatarStorage = async () => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem('avatar')
        .then((avatar) => {
          if (avatar != null) {
            avatar = JSON.parse(avatar)
            setAvatarProps(avatar.avatarProps)
            setAvatarName(avatar.avatarName)
          } else {
            storeAvatar()
          }

          resolve(avatarProps, avatarName)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  const storeAvatar = async () => {
    try {
      await AsyncStorage.setItem(
        'avatar',
        JSON.stringify({
          avatarProps,
          avatarName,
        })
      )
      await AsyncStorage.setItem(
        'uuid',
        JSON.stringify({
          uuid,
        })
      )
    } catch (error) {
      console.log('Local storage data Error : ', error)
    }
  }

  React.useEffect(() => {
    getAvatarStorage()
    playSound()
    /* createUser('Maxime') */
    /* createGame('1b85aff7-d73c-4036-915b-8e3af4734d0a', 2, false) */
    /* joinPublicParty("Josias", "c35ea4d1-69e0-4961-8347-c282ce471564", 2); */
    /* createGame("37171949-e481-4e39-b1b7-de05775bfbb8", 2, true); */
    /* joinPrivateParty('487ad05e-2ae5-4fa5-a9f6-1670eaa69096', 'Test', '0128a7ce-eb9b-4584-bdb8-5514588b929e') */

    socket.once('userCreated', function (msg) {
      if (msg.error) Alert.alert(msg.error)
      else setUuid(msg.data.uuid)
    })
    /* socket.once('userJoined', function (msg) {
      console.log(msg)
    }) */
    socket.once('eliminate', function (msg) {
      console.log(msg)
    })
    socket.once('endGame', function (msg) {
      console.log(msg)
    })
    socket.once('answer', function (msg) {
      console.log(msg)
    })
    socket.once('start', function (msg) {
      console.log(msg)
    })
    socket.once('buzz', function (msg) {
      console.log(msg)
    })
  }, [])

  cancelModifyAvatar = () => {
    getAvatarStorage()
    setModifyAvatar(!isModifyAvatar)
  }

  validModifyAvatar = () => {
    storeAvatar()
    setModifyAvatar(!isModifyAvatar)
    /* if(!hasLocalstorage) {
      createUser(avatarName, avatarProps)
    } */
    createUser(avatarName, avatarProps)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Animatable.View animation="bounce" iterationCount={500}>
              <Avatar avatarProps={avatarProps} />
            </Animatable.View>
            {isModifyAvatar ? (
              <Input
                rounded
                placeholder={avatarName}
                placeholderTextColor="black"
                icon="pencil"
                family="Entypo"
                iconSize={14}
                style={styles.inputName}
                onSubmitEditing={(event) => setAvatarName(event.nativeEvent.text)}
              />
            ) : (
              <View style={styles.avatarNameView}>
                <Text style={styles.avatarName}>{avatarName}</Text>
              </View>
            )}

            {isModifyAvatar ? (
              <View style={{ flexDirection: 'row' }}>
                <Button radius="10" style={{ width: '40%' }} color="#ccc" onPress={() => cancelModifyAvatar()}>
                  Annuler
                </Button>
                <Button radius="10" style={{ width: '40%' }} color="success" onPress={() => validModifyAvatar()}>
                  Valider
                </Button>
              </View>
            ) : (
              <Button
                radius="10"
                size="small"
                style={{ backgroundColor: '#ccc' }}
                onPress={() => setModifyAvatar(!isModifyAvatar)}
              >
                Modifier
              </Button>
            )}
          </View>
          <View style={styles.mode}>
            {isModifyAvatar ? (
              <PersonalizeAvatar avatarProps={avatarProps} setAvatarProps={setAvatarProps} />
            ) : (
              <Mode
                avatarProps={avatarProps}
                navigation={props.navigation}
                sound={sound}
                avatarName={avatarName}
                uuid={uuid}
              />
            )}
          </View>
        </View>
        <View style={{ left: 0, position: 'absolute', bottom: 0 }}>
          <FontAwesome5
            name="users"
            size={40}
            color="green"
            style={{ margin: '1%', marginLeft: '9%' }}
            onPress={() => setOpenModal(true)}
          />
        </View>
      </ImageBackground>
      <TypeRoom
        visible={openModal}
        closeModal={setOpenModal}
        navigation={props.navigation}
        sound={sound}
        avatarName={avatarName}
        avatarProps={avatarProps}
        uuid={uuid}
      ></TypeRoom>
    </View>
  )
}

export default Home
