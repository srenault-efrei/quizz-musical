import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';


const Mode = () => {

    return (
        <>
            <View style={styles.viewLabelMode}>
                <Image
                    source={{
                        uri: 'https://static.thenounproject.com/png/2119141-200.png',
                    }}
                    style={styles.tinyLogo}
                />

                <Text style={styles.labelMode}>
                    POP
              </Text>
            </View>
            <View style={styles.viewLabelMode}>
                <Image
                    source={{
                        uri: 'https://img.icons8.com/ios/452/rap.png',
                    }}
                    style={styles.tinyLogo}
                />
                <Text style={styles.labelMode}>
                    RAP
              </Text>
            </View>
            <View style={styles.viewLabelMode}>
                <Image
                    source={{
                        uri: 'https://cdn3.iconfinder.com/data/icons/interaction-design/512/Hand_D-512.png',
                    }}
                    style={styles.tinyLogo}
                />
                <Text style={styles.labelMode}>
                    ROCK
              </Text>
            </View>
            <View style={styles.viewLabelMode}>
                <Image
                    source={{
                        uri: 'https://img.icons8.com/ios/452/reggae.png',
                    }}
                    style={styles.tinyLogo}
                />

                <Text style={styles.labelMode}>
                    REGGAE
              </Text>
            </View>
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