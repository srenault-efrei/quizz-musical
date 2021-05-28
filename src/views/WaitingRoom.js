import * as React from 'react'
import { View, Text, StyleSheet, Share } from 'react-native'
import { modes } from '../utils'
import Constants from 'expo-constants'
import { AntDesign } from '@expo/vector-icons'
import { Button } from 'galio-framework'
import Avatar from '../components/Avatar'
import * as Animatable from 'react-native-animatable'
import socket from '../lib/socket'

const WaitingRoom = (props) => {
  const [listSongs, setListSongs] = React.useState()
  const [code, setCode] = React.useState()
  const [animation, setAnimation] = React.useState('')
  const { indexMode } = props.route.params
  const { sound } = props.route.params
  const { avatarProps } = props.route.params
  const [users, setUsers] = React.useState([])
  React.useEffect(() => {
    getSongs()
    if (props.route.params.code) {
      setCode(props.route.params.code)
    } else {
      setCode('NomDuSAlon-DSDLXSDSDL')
    }
    socket.once('start', function (msg) {
      console.log(msg)
    })
    socket.once('userJoined', function (msg) {
      if (msg.error) console.log(msg.error)
      else setUsers([...users, msg])
    })
  }, [])

  const getSongs = async () => {
    const list = []
    const apiKey = Constants.manifest.extra.keyNapster
    const response = await fetch(
      `http://api.napster.com/v2.2/genres/${modes[indexMode]}/tracks/top?apikey=${apiKey}&limit=5`
    )
    const data = await response.json()

    for (const song of data.tracks) {
      const element = {
        urlMp3: song.previewURL,
        name: song.name.trim().replace('.', ''),
      }
      list.push(element)
    }
    setListSongs(list)
  }

  const goToRoom = () => {
    props.navigation.navigate('Room', { listSongs, indexMode, sound: sound, avatarProps })
  }

  const onShare = async () => {
    try {
      await Share.share({
        message: `Voici un code d'invitation pour le quizz musicale : ${code}`,
      })
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.viewCode}>
        <AntDesign name="caretright" size={30} color="green" />
        <Text style={styles.code}>{code}</Text>
        <Button
          color="success"
          onPress={() => {
            onShare()
          }}
        >
          Partager le code
        </Button>
      </View>

      <Text style={styles.members}>Membres 4/4</Text>

      <Animatable.View
        animation={animation}
        style={styles.viewAvatar}
        onAnimationEnd={(endState) => {
          endState.finished && goToRoom()
        }}
      >
        {users.map(({ username, avatar }, index) => (
          <Animatable.View key={index} animation="bounce" iterationCount={500} duration={1000}>
            <Avatar avatarProps={avatar} />
            <Text style={styles.name}>{username}</Text>
          </Animatable.View>
        ))}
      </Animatable.View>

      <View style={styles.footer}>
        <Button
          size="large"
          color="success"
          onPress={() => {
            startGame(props.uuid, props.gameID)
            setAnimation('tada'), sound.unloadAsync()
          }}
        >
          Lancer la partie
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  viewCode: {
    flex: 2,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewAvatar: {
    flex: 3,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  code: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '3%',
  },
  members: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    textAlign: 'center',
    marginBottom: '10%',
  },
  footer: {
    alignItems: 'center',
    flex: 1,
  },
})
export default WaitingRoom
