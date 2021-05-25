import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { set } from 'react-native-reanimated';
import { StyleSheet } from 'react-native';


const Room = (props) => {
    // const [tmp, setTmp] = useState(5)
    // let compteur = 5

    // useEffect(() => {
    //     console.log("les sons a lancé dans la room : ", props.route.params)

    //     setInterval(function () {
    //         if (compteur !== 0) {
    //             compteur = compteur - 1
    //             setTmp(compteur)
    //         }
    //     }, 2000)
    // }, [])

    // const content = (tmp) => {
    //     if (tmp === 5) {
    //         return <Text>La partie va commencer</Text>
    //     } else if (tmp != 0) {
    //         return <Text>{tmp}</Text>
    //     } else if (tmp === 0) {
    //         return <Text>Partie commence </Text>
    //     }
    // }
    return (
        <View style={styles.container}>
            <Text style={styles.textTmp}>
                room
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        opacity: 0.5,
        alignItems: "center",
        justifyContent: "center"
    },

    textTmp: {
        fontSize: 50,
        fontWeight: "bold",
    }

});
export default Room