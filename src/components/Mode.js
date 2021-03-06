import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, Image, TouchableOpacity, LogBox, Alert } from 'react-native'
import createGame from '../lib/createGame'
import joinPublicParty from '../lib/joinPublicParty'
import socket from '../lib/socket'

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])

const Mode = (props) => {
  const goToWaitingRoom = (indexMode, gameID) => {
    props.navigation.navigate('WaitingRoom', {
      indexMode,
      sound: props.sound,
      avatarProps: props.avatarProps,
      code: gameID,
      uuid: props.uuid,
      avatarName: props.avatarName,
    })
  }

  const handlePress = async (indexMode, props) => {
    if (props.closeAllModal) {
      props.closeAllModal()
    }
    if (props.isPrivate !== undefined) {
      createGame(props.uuid, indexMode, props.isPrivate)
      socket.once('gameCreated', function (msg) {
        if (msg.error) Alert.alert(msg.error)
        else {
          goToWaitingRoom(indexMode, msg.id)
        }
      })
    } else {
      joinPublicParty(props.avatarName, props.uuid, indexMode)
      socket.once('userJoined', function (msg) {
        if (msg.error) Alert.alert(msg.error)
        else {
          goToWaitingRoom(indexMode, msg.id)
        }
      })
    }
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
