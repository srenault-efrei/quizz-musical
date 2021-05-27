import * as React from 'react'

import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import { Input, Block } from 'galio-framework'

const ResponseTitle = (props) => {
  return (
    <Modal animationType="slide" transparent={true} visible={props.visible} supportedOrientations={['landscape']}>
      <View style={styles.modalView}>
        <Input
          placeholder="Titre"
          color="black"
          style={{ borderColor: 'grey' }}
          placeholderTextColor="grey"
          onSubmitEditing={(event) => props.nextSong(event.nativeEvent.text)}
        />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: '10%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default ResponseTitle
