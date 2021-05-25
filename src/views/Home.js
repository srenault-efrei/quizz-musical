import React, { useState, useEffect } from 'react'
import { View, ImageBackground, StyleSheet } from 'react-native';
import Avatar from '../components/Avatar';
import Mode from '../components/Mode';
import PersonalizeAvatar from '../components/PersonalizeAvatar';


const image = { uri: "https://img.pixers.pics/pho_wat(s3:700/FO/64/91/41/38/700_FO64914138_bc4676ea52e53b3a655d1beeadca1e88.jpg,700,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,650,jpg)/papiers-peints-fond-musical-colore.jpg.jpg" };

const Home = () => {
    const [avatarProps, setAvatarProps] = useState({
        accessory: "shades",
        bgColor: "blue",
        bgShape: "circle",
        body: "chest",
        clothing: "tankTop",
        clothingColor: "black",
        eyebrows: "angry",
        eyes: "wink",
        facialHair: "mediumBeard",
        graphic: "vue",
        hair: "short",
        hairColor: "white",
        hat: "none",
        hatColor: "green",
        lashes: false,
        lipColor: "purple",
        mouth: "open",
        showBackground: false,
        size: 300,
        skinTone: "brown",
    })

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.content}>
                    <View style={styles.avatar}>
                        <Avatar avatarProps={avatarProps} />
                    </View>
                    <View style={styles.mode}>
                        <PersonalizeAvatar avatarProps={avatarProps} setAvatarProps={setAvatarProps} />
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
        width: "40%",
        alignItems: "center"
    },

    mode: {
        width: "40%",
        alignItems: "center",
        backgroundColor: "#ccc",
        justifyContent: "space-between",
        borderRadius: 10,
        opacity: 0.5,
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


export default Home