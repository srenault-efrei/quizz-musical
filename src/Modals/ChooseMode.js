import * as React from "react"

import { Modal, StyleSheet, View } from "react-native";
import { Button } from 'galio-framework';
import Mode from "../components/Mode";

const ChooseMode = (props) => {

    const closeAllModal = () => {
        props.closeTypeRoom(false)
        props.closeModal(false)
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.visible}
            supportedOrientations={['landscape']}
        >
            <View>

                <View style={styles.modalView}>
                    <Mode navigation={props.navigation} sound={props.sound} closeAllModal={closeAllModal} />
                    <Button color="red" size={"small"} onPress={() => props.closeModal(false)} style={{ marginTop: "2%" }} >Fermer</Button>
                </View>
            </View>


        </Modal>

    )
}

const styles = StyleSheet.create({

    modalView: {
        flexDirection: 'column',
        margin: "7%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1.25,
        shadowRadius: 4,
        elevation: 5
    },

});

export default ChooseMode