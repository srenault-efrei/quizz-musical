import React, { useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, LogBox } from 'react-native'
import createUser from '../lib/createUser'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const Mode = (props) => {
  const [indexMode, setIndexMode] = useState()
  console.log("name ", props.avatarName)

  const handlePress = async (indexMode, props) => {
    if (props.closeAllModal) {
      props.closeAllModal()
    }
    createUser(props.avatarName)
    setIndexMode(indexMode)
    // await playSound()
    props.navigation.navigate('WaitingRoom', { indexMode, sound: props.sound, avatarProps: props.avatarProps })
  }

  return (
    <>
      <TouchableOpacity
        style={styles.viewLabelMode}
        onPress={async () => {
          handlePress(0, props)
        }}
      >
        <Image
          source={{
            uri: 'https://static.thenounproject.com/png/2119141-200.png',
          }}
          style={styles.tinyLogo}
        />

        <Text style={styles.labelMode}>POP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewLabelMode}
        onPress={() => {
          handlePress(1, props)
        }}
      >
        <Image
          source={{
            uri: 'https://img.icons8.com/ios/452/rap.png',
          }}
          style={styles.tinyLogo}
        />
        <Text style={styles.labelMode}>RAP</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewLabelMode}
        onPress={() => {
          handlePress(2, props)
        }}
      >
        <Image
          source={{
            uri: 'https://cdn3.iconfinder.com/data/icons/interaction-design/512/Hand_D-512.png',
          }}
          style={styles.tinyLogo}
        />
        <Text style={styles.labelMode}>ROCK</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.viewLabelMode}
        onPress={() => {
          handlePress(3, props)
        }}
      >
        <Image
          source={{
            uri: 'https://img.icons8.com/ios/452/reggae.png',
          }}
          style={styles.tinyLogo}
        />

        <Text style={styles.labelMode}>REGGAE</Text>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  viewLabelMode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelMode: {
    marginLeft: '10%',
    fontSize: 30,
    fontWeight: 'bold',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})

export default Mode
