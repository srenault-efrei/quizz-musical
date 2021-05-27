import * as React from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    Text,
    Image,
    TouchableOpacity,
    Alert,
} from "react-native";
import { gifs } from "../utils";
import Avatar from "../components/Avatar";
import * as Animatable from "react-native-animatable";
import { Button } from "galio-framework";
import ResponseTitle from "../Modals/ResponseTitle";

const Room = (props) => {
    const [tmp, setTmp] = React.useState(4);
    const [indexMode, setIndexMode] = React.useState(
        props.route.params.indexMode
    );
    const sound = props.route.params.sound;
    const listSongs = props.route.params.listSongs;
    const [openMoal, setOpenModal] = React.useState(false);

    let compteur = 4;
    const [numberTitle, setNumberTitle] = React.useState(0);

    React.useEffect(() => {
        setInterval(function () {
            if (compteur !== 0) {
                compteur = compteur - 1;
                setTmp(compteur);
            }
        }, 1500);
    }, []);

    React.useEffect(() => {
        if (tmp === 0 && numberTitle < 5) {
            if (!numberTitle) {
                playSound(0);
            } else {
                playSound(numberTitle);
            }
        }
    }, [numberTitle, tmp]);

    const playSound = async (index) => {
        const statutSound = await sound.getStatusAsync();
        if (statutSound.isLoaded) {
            sound.unloadAsync();
        }
        await sound.loadAsync({
            uri: listSongs[index].urlMp3,
        });
        await sound.playAsync();
    };

    const content = (tmp) => {
        if (tmp === 4) {
            return (
                <Text style={styles.textCompteur}>
                    Trouver le nom du titre en appuyant sur le buzzer
                </Text>
            );
        } else if (tmp != 0) {
            return <Text style={styles.textNumber}>{tmp}</Text>;
        }
    };

    const nextSong = (title) => {
        title && title[0].toUpperCase();
        console.log("Titre a trouvé", listSongs[numberTitle].name);
        if (listSongs[numberTitle].name.includes(title)) {
            setNumberTitle(numberTitle + 1);
            Alert.alert("Bonne réponse");
        } else {
            Alert.alert("Mauvaise réponse");
        }
        setOpenModal(false);
    };

    return (
        <View style={styles.container}>
            {numberTitle !== 5 ? (
                tmp === 0 ? (
                    <ImageBackground
                        source={gifs[indexMode]}
                        style={styles.content}
                        resizeMode="stretch"
                    >
                        <View style={styles.viewTitle}>
                            <Button
                                icon="music"
                                iconFamily="Feather"
                                color="red"
                                size="small"
                                capitalize
                                shadowless
                            >
                                TITRE 1/2
              </Button>
                        </View>

                        {/* setNumberTitle(numberTitle + 1) */}
                        {numberTitle !== 5 && (
                            <TouchableOpacity
                                style={styles.viewBuzzer}
                                onPress={() => setOpenModal(true)}
                            >
                                <Image
                                    source={require("../../assets/images/buzzer.png")}
                                    style={styles.buzzer}
                                />
                            </TouchableOpacity>
                        )}

                        <View style={styles.viewAvatar}>
                            <Animatable.View
                                animation=""
                                iterationCount={500}
                                duration={1000}
                            >
                                <Avatar hairColor="blue" size={200} />
                                <Text style={styles.name}>Steven</Text>
                            </Animatable.View>
                            <Animatable.View
                                animation=""
                                iterationCount={500}
                                duration={1500}
                            >
                                <Avatar hairColor="white" size={200} />
                                <Text style={styles.name}>Josias</Text>
                            </Animatable.View>

                            <Animatable.View
                                animation=""
                                iterationCount={500}
                                duration={2000}
                            >
                                <Avatar hairColor="black" size={200} />
                                <Text style={styles.name}>Maxime</Text>
                            </Animatable.View>

                            <Animatable.View
                                animation=""
                                iterationCount={500}
                                duration={2500}
                            >
                                <Avatar hairColor="brown" size={200} />
                                <Text style={styles.name}>Fabian</Text>
                            </Animatable.View>
                        </View>
                    </ImageBackground>
                ) : (
                    <View style={styles.content}>{content(tmp)}</View>
                )
            ) : (
                <Text style={styles.textCompteur}>Partie terminé le gagnant est x</Text>
            )}
            <ResponseTitle visible={openMoal} nextSong={nextSong}></ResponseTitle>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    viewTitle: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "4%",
    },
    viewBuzzer: {
        flex: 3,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    viewAvatar: {
        flex: 7,
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    code: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    textNumber: {
        fontSize: 200,
        fontWeight: "bold",
    },
    textCompteur: {
        fontSize: 30,
        fontWeight: "bold",
    },
    name: {
        textAlign: "center",
        marginBottom: "10%",
    },
    buzzer: {
        width: 200,
        height: 200,
    },
});
export default Room;
