import * as React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import Avatar from '../components/Avatar'
import Mode from '../components/Mode'
import { Audio } from 'expo-av'
import * as Animatable from 'react-native-animatable'
import createUser from '../lib/createUser'
import createGame from '../lib/createGame'
import joinPublicParty from '../lib/joinPublicParty'
import joinPrivateParty from '../lib/joinPrivateParty'
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
    playSound();
    /* createUser("Maxime"); */
    /*   createUser("Josias"); */
    /*   createUser("Fabian"); */
    /* createGame("05176003-8254-4921-aa94-f256bbc1a2d4", 2, true); */
    /* joinPublicParty("Josias", "c35ea4d1-69e0-4961-8347-c282ce471564", 2); */
    /* createGame("37171949-e481-4e39-b1b7-de05775bfbb8", 2, true); */
    /* joinPrivateParty(
        "7de703af-fa25-46c9-93ee-72d99bc0af9c",
        "Josias",
        "de894750-9c11-445e-bb66-576bb92723f1"
      ); */

    socket.once('userCreated', function (msg) {
      console.log(msg)
    })
    socket.once('gameCreated', function (msg) {
      console.log(msg)
    })
    socket.once('userJoined', function (msg) {
      console.log(msg)
    })
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
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.content}>
          <View style={styles.avatar}>
            <Animatable.View animation="bounce" iterationCount={500}>
              <Avatar avatarProps={avatarProps} />
            </Animatable.View>
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
              : <Mode avatarProps={avatarProps} navigation={props.navigation} sound={sound} />}
          </View>
        </View>
        <View style={{ width: '100%', position: "absolute", bottom: 0 }}>
          <FontAwesome5
            name="users"
            size={40}
            color="green"
            style={{ margin: '3%' }}
            onPress={() => setOpenModal(true)}
          />
        </View>
      </ImageBackground>
      <TypeRoom visible={openModal} closeModal={setOpenModal} navigation={props.navigation} sound={sound} ></TypeRoom>

    </View>
  )
}



export default Home
