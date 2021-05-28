import * as React from 'react'

import { Modal, StyleSheet, View, Alert } from 'react-native'
import { Button, Input } from 'galio-framework'

import joinPrivateParty from '../lib/joinPrivateParty'

const JoinCodeRoom = (props) => {
    const [code, setCode] = React.useState('')

    const goToWaitingRoom = () => {
        console.log("code", code)
        if (code !== '') {
            joinPrivateParty(props.uuid.toString(), props.avatarName.toString(), code.toString())
            props.navigation.navigate('WaitingRoom', {
                indexMode: 0,
                sound: props.sound,
                code,
                avatarProps: props.avatarProps,
            }),
                props.closeModal(false)
            props.closeTypeRoom(false)
        } else {
            Alert.alert('Vous devez rentrer un code')
        }
    }

    return (
        <Modal animationType="fade" transparent={true} visible={props.visible} supportedOrientations={['landscape']}>
            <View>
                <View style={styles.modalView}>
                    <Input
                        placeholder="Code"
                        color="black"
                        style="green"
                        placeholderTextColor="grey"
                        onSubmitEditing={(event) => {
                            setCode(event.nativeEvent.text)
                        }}
                    />

                    {/* en fonction du code je dois retrouver le indexMode la c en dure */}
                    <Button
                        style={{ width: '80%' }}
                        color={'green'}
                        onPress={() => {
                            goToWaitingRoom()
                        }}
                    >
                        Valider
          </Button>
                    <Button color="red" style={{ width: '80%' }} onPress={() => props.closeModal(false)}>
                        Fermer
          </Button>
                </View>
            </View>
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

export default JoinCodeRoom
