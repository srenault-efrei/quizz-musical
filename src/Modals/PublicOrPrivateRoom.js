import * as React from 'react'

import { Modal, StyleSheet, View } from 'react-native'
import { Button, Radio } from 'galio-framework'
import ChooseMode from './ChooseMode'

const PublicOrPrivateRoom = (props) => {
  const [openChooseModeModal, setOpenChooseModeModal] = React.useState(false)
  const [isPrivate, setIsPrivate] = React.useState(false)

  return (
    <Modal animationType="fade" transparent={true} visible={props.visible} supportedOrientations={['landscape']}>
      <View>
        <View style={styles.modalView}>
          <Button
            style={{ width: '80%' }}
            color="info"
            onPress={() => {
              setOpenChooseModeModal(true)
            }}
          >
            Public
          </Button>

          <Button
            style={{ width: '80%' }}
            color="#50C7C7"
            onPress={() => {
              setOpenChooseModeModal(true)
              setIsPrivate(true)
            }}
          >
            Privé
          </Button>
          <Button
            color="red"
            style={{ width: '80%' }}
            onPress={() => {
              props.closeModal(false)
            }}
          >
            Fermer
          </Button>
        </View>
      </View>
      <ChooseMode
        visible={openChooseModeModal}
        navigation={props.navigation}
        sound={props.sound}
        closeModal={setOpenChooseModeModal}
        closePublicOrPrivateRoom={props.closeModal}
        closeTypeRoom={props.closeTypeRoom}
        avatarProps={props.avatarProps}
        avatarName={props.avatarName}
        isPrivate={isPrivate}
        uuid={props.uuid}
      ></ChooseMode>
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

export default PublicOrPrivateRoom
