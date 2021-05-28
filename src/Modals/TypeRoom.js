import * as React from 'react'

import { Modal, StyleSheet, View } from 'react-native'
import { Button } from 'galio-framework'
import JoinCodeRoom from './JoinCodeRoom'
import ChooseMode from './ChooseMode'
import PublicOrPrivateRoom from './PublicOrPrivateRoom'

const TypeRoom = (props) => {
  const [openJoinCode, setJoinCode] = React.useState(false)
  const [openPublicOrPrivateRoom, setOpenPublicOrPrivateRoom] = React.useState(false)

  return (
    <Modal animationType="fade" transparent={true} visible={props.visible} supportedOrientations={['landscape']}>
      <View>
        <View style={styles.modalView}>
          <Button
            style={{ width: '80%' }}
            color={'green'}
            onPress={() => {
              setOpenPublicOrPrivateRoom(true)
            }}
          >
            Créer une partie personnalisé
          </Button>
          <Button style={{ width: '80%' }} color={'green'} onPress={() => setJoinCode(true)}>
            Rejoindre une partie
          </Button>
          <Button color="red" style={{ width: '80%' }} onPress={() => props.closeModal(false)}>
            Fermer
          </Button>
        </View>
      </View>

      <JoinCodeRoom
        visible={openJoinCode}
        navigation={props.navigation}
        closeModal={setJoinCode}
        closeTypeRoom={props.closeModal}
        sound={props.sound}
        avatarProps={props.avatarProps}
        avatarName={props.avatarName}
        uuid={props.uuid}
      ></JoinCodeRoom>

      <PublicOrPrivateRoom
        visible={openPublicOrPrivateRoom}
        navigation={props.navigation}
        sound={props.sound}
        closeModal={setOpenPublicOrPrivateRoom}
        closeTypeRoom={props.closeModal}
        avatarProps={props.avatarProps}
        avatarName={props.avatarName}
        uuid={props.uuid}
      ></PublicOrPrivateRoom>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    flexDirection: 'column',
    margin: '7%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default TypeRoom
