import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';


const Mode = (props) => {
    const [indexMode, setIndexMode] = useState()

    const handlePress = async (indexMode) => {
        setIndexMode(indexMode)
        // await playSound()
        props.navigation.navigate("WaitingRoom", { indexMode })
    }


    return (
        <>
            <TouchableOpacity style={styles.viewLabelMode}
                onPress={async () => {
                    handlePress(0)
                }}
            >
                <Image
                    source={{
                        uri: 'https://static.thenounproject.com/png/2119141-200.png',
                    }}
                    style={styles.tinyLogo}
                />

                <Text style={styles.labelMode}>
                    POP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewLabelMode}
                onPress={() => {
                    handlePress(1)
                }}>
                <Image
                    source={{
                        uri: 'https://img.icons8.com/ios/452/rap.png',
                    }}
                    style={styles.tinyLogo}
                />
                <Text style={styles.labelMode}>
                    RAP
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewLabelMode}
                onPress={() => {
                    handlePress(2)
                }}
            >
                <Image
                    source={{
                        uri: 'https://cdn3.iconfinder.com/data/icons/interaction-design/512/Hand_D-512.png',
                    }}
                    style={styles.tinyLogo}
                />
                <Text style={styles.labelMode}>
                    ROCK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewLabelMode}
                onPress={() => {
                    handlePress(3)
                }}
            >
                <Image
                    source={{
                        uri: 'https://img.icons8.com/ios/452/reggae.png',
                    }}
                    style={styles.tinyLogo}
                />

                <Text style={styles.labelMode}>
                    REGGAE
              </Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({

    viewLabelMode: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    labelMode: {
        marginLeft: "10%",
        fontSize: 30,
        fontWeight: "bold",

    },
    tinyLogo: {
        width: 50,
        height: 50,
    },

});

export default Mode