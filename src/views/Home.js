import React from 'react';
import { Text } from 'galio-framework';
import { View, ImageBackground, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';


const image = { uri: "https://comcomtv.fr/wp-content/uploads/2018/03/illustration-de-fond-de-note-de-musique-vectorielle_1394-165-e1521137659880.jpg" };

const Home = () => {

    return (
        <View style={styles.container}>


            <ImageBackground source={image} style={styles.image}>
                <View style={styles.content}>
                    <View style={styles.avatar}>
                        <Avatar hairColor="white" />
                    </View>
                    <View style={styles.mode}>
                        <Text>STEVEN MET LE MODE ICI</Text>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    content: {
        flexDirection: "row",
    },
    avatar: {
        width: "30%",
        alignItems: "center"
    },

    mode: {
        width: "70%",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.7
    },
});


export default Home