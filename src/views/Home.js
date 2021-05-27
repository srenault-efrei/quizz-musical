import * as React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";
import Avatar from "../components/Avatar";
import Mode from "../components/Mode";
import { Audio } from "expo-av";
import * as Animatable from "react-native-animatable";
import createUser from "../lib/createUser";
import socket from "../lib/socket";
import { FontAwesome5 } from '@expo/vector-icons';
import TypeRoom from "../Modals/TypeRoom";
import ChooseMode from "../Modals/ChooseMode";

const Home = (props) => {
    const [sound, setSound] = React.useState();
    const [openModal, setOpenModal] = React.useState(false)
    const image = {
        uri: "https://img.pixers.pics/pho_wat(s3:700/FO/64/91/41/38/700_FO64914138_bc4676ea52e53b3a655d1beeadca1e88.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/papiers-peints-fond-musical-colore.jpg.jpg",
    };

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require("../../assets/songs/home.mp3")
        );

        await sound.playAsync();
        setSound(sound);
    };

    React.useEffect(() => {
        playSound();
        /* createUser("Josias"); */
        socket.on("userCreated", function (msg) {
            console.log(msg);
        });
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.content}>
                    <View style={styles.avatar}>
                        <Animatable.View animation="bounce" iterationCount={500}>
                            <Avatar hairColor="white" size={300} />
                        </Animatable.View>
                    </View>
                    <View style={styles.mode}>
                        <Mode navigation={props.navigation} sound={sound} />
                    </View>
                </View>
                <View style={{ width: "100%" }} >
                    <FontAwesome5 name="users" size={40} color="green" style={{ marginLeft: "1%" }} onPress={() => setOpenModal(true)} />
                </View>
            </ImageBackground>

            <TypeRoom visible={openModal} closeModal={setOpenModal} navigation={props.navigation} sound={sound}></TypeRoom>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    content: {
        flexDirection: "row",
        alignContent: "center"
    },
    avatar: {
        width: "40%",
        alignItems: "center",
    },
    viewIconUser: {
        width: "100"
    },
    mode: {
        width: "40%",
        alignItems: "center",
        backgroundColor: "#ccc",
        justifyContent: "space-between",
        borderRadius: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: "#ccc",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },
});

export default Home;
