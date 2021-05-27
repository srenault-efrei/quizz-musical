import React from 'react'
import { View, Text } from 'react-native'

import styles from '../assets/styles/styles'

export const colors = {
    clothing: { white: '#FFFFFF', blue: '#85C5E5', black: '#633749', green: '#89D86F', red: '#D67070' },
    hair: { blonde: '#FEDC58', orange: '#D96E27', black: '#592D3D', white: '#FFFFFF', brown: '#A56941', blue: '#85C5E5', pink: '#D69AC7' },
    hat: { white: '#FFFFFF', blue: '#85C5E5', black: '#5E3244', green: '#89D86F', red: '#D67070' },
    mouth: { red: '#DD3E3E', purple: '#B256A1', pink: '#D69AC7', turqoise: '#5CCBF1', green: '#4AB749' },
    skinTone: { light: '#FDD2B2', yellow: '#FBE8B3', brown: '#D8985D', dark: '#A56941', red: '#CC734C', black: '#754437' }
}

export const avatarPropsInit = {
    accessory: "none",
    bgColor: "blue",
    bgShape: "circle",
    body: "chest",
    clothing: "shirt",
    clothingColor: "white",
    eyebrows: "leftLowered",
    eyes: "normal",
    facialHair: "none",
    graphic: "react",
    hair: "none",
    hairColor: "blue",
    hat: "party",
    hatColor: "green",
    lashes: false,
    lipColor: "purple",
    mouth: "open",
    showBackground: false,
    size: 200,
    skinTone: "brown"
}

export const avatarPropsList = [
    {
        name: 'Hat',
        label: 'hat',
        type: 'strings',
        selectors: [
            { key: 1, label: 'none', value: 'none', component: (<Text>none</Text>) },
            { key: 2, label: 'beanie', value: 'beanie', component: (<Text>beanie</Text>) },
            { key: 3, label: 'turban', value: 'turban', component: (<Text>turban</Text>) },
            { key: 4, label: 'party', value: 'party', component: (<Text>party</Text>) },
            { key: 5, label: 'hijab', value: 'hijab', component: (<Text>hijab</Text>) }
        ],
        colors: {
            name: 'Hat color',
            label: 'hatColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: 'white', value: 'white', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.white }]}>
                            <Text style={{ color: 'black' }}>Blanc</Text>
                        </View>)
                },
                {
                    key: 2, label: 'blue', value: 'blue', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.blue }]}>
                            <Text style={{ color: 'white' }}>Bleu</Text>
                        </View>)
                },
                {
                    key: 3, label: 'black', value: 'black', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.black }]}>
                            <Text style={{ color: 'white' }}>Noir</Text>
                        </View>)
                },
                {
                    key: 4, label: 'green', value: 'green', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.green }]}>
                            <Text style={{ color: 'white' }}>Vert</Text>
                        </View>)
                },
                {
                    key: 5, label: 'red', value: 'red', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.red }]}>
                            <Text style={{ color: 'white' }}>Rouge</Text>
                        </View>)
                }
            ]
        }
    },
    {
        name: 'Hair',
        label: 'hair',
        type: 'strings',
        selectors: [
            { key: 1, label: 'none', value: 'none', component: (<Text>none</Text>) },
            { key: 2, label: 'long', value: 'long', component: (<Text>long</Text>) },
            { key: 3, label: 'bun', value: 'bun', component: (<Text>bun</Text>) },
            { key: 4, label: 'short', value: 'short', component: (<Text>short</Text>) },
            { key: 5, label: 'pixie', value: 'pixie', component: (<Text>pixie</Text>) },
            { key: 6, label: 'balding', value: 'balding', component: (<Text>balding</Text>) },
            { key: 7, label: 'buzz', value: 'buzz', component: (<Text>buzz</Text>) },
            { key: 8, label: 'afro', value: 'afro', component: (<Text>afro</Text>) },
            { key: 9, label: 'bob', value: 'bob', component: (<Text>bob</Text>) },
            { key: 10, label: 'mohawk', value: 'mohawk', component: (<Text>mohawk</Text>) }
        ],
        colors: {
            name: 'Hair color',
            label: 'hairColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: 'blonde', value: 'blonde', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.blonde }]}>
                            <Text style={{ color: 'black' }}>Blond</Text>
                        </View>)
                },
                {
                    key: 2, label: 'orange', value: 'orange', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.orange }]}>
                            <Text style={{ color: 'white' }}>Orange</Text>
                        </View>)
                },
                {
                    key: 3, label: 'black', value: 'black', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.black }]}>
                            <Text style={{ color: 'white' }}>Noir</Text>
                        </View>)
                },
                {
                    key: 4, label: 'white', value: 'white', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.white }]}>
                            <Text style={{ color: 'black' }}>Blanc</Text>
                        </View>)
                },
                {
                    key: 5, label: 'brown', value: 'brown', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.brown }]}>
                            <Text style={{ color: 'white' }}>Marron</Text>
                        </View>)
                },
                {
                    key: 6, label: 'blue', value: 'blue', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.blue }]}>
                            <Text style={{ color: 'white' }}>Bleu</Text>
                        </View>)
                },
                {
                    key: 7, label: 'pink', value: 'pink', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.pink }]}>
                            <Text style={{ color: 'white' }}>Rose</Text>
                        </View>)
                }
            ]
        }
    },
    {
        name: 'Lashes',
        label: 'lashes',
        type: 'boolean',
        booleanLabels: {
            true: 'true',
            false: 'false'
        },
        selectors: [
            { key: 1, label: 'true', value: true, component: (<Text>true</Text>) },
            { key: 2, label: 'false', value: false, component: (<Text>false</Text>) }
        ]
    },
    {
        name: 'Eyes',
        label: 'eyes',
        type: 'type',
        selectors: [
            { key: 1, label: 'normal', value: 'normal', component: (<Text>normal</Text>) },
            { key: 2, label: 'leftTwitch', value: 'leftTwitch', component: (<Text>leftTwitch</Text>) },
            { key: 3, label: 'happy', value: 'happy', component: (<Text>happy</Text>) },
            { key: 4, label: 'content', value: 'content', component: (<Text>content</Text>) },
            { key: 5, label: 'squint', value: 'squint', component: (<Text>squint</Text>) },
            { key: 6, label: 'simple', value: 'simple', component: (<Text>simple</Text>) },
            { key: 7, label: 'dizzy', value: 'dizzy', component: (<Text>dizzy</Text>) },
            { key: 8, label: 'wink', value: 'wink', component: (<Text>wink</Text>) },
            { key: 9, label: 'hearts', value: 'hearts', component: (<Text>hearts</Text>) },
            { key: 10, label: 'crazy', value: 'crazy', component: (<Text>crazy</Text>) },
            { key: 11, label: 'cute', value: 'cute', component: (<Text>cute</Text>) },
            { key: 12, label: 'dollars', value: 'dollars', component: (<Text>dollars</Text>) },
            { key: 13, label: 'stars', value: 'stars', component: (<Text>stars</Text>) },
            { key: 14, label: 'cyborg', value: 'cyborg', component: (<Text>cyborg</Text>) },
            { key: 15, label: 'simplePatch', value: 'simplePatch', component: (<Text>simplePatch</Text>) },
            { key: 16, label: 'piratePatch', value: 'piratePatch', component: (<Text>piratePatch</Text>) },
        ]
    },
    {
        name: 'Eyebrows',
        label: 'eyebrows',
        type: 'strings',
        selectors: [
            { key: 1, label: 'raised', value: 'raised', component: (<Text>raised</Text>) },
            { key: 2, label: 'leftLowered', value: 'leftLowered', component: (<Text>leftLowered</Text>) },
            { key: 3, label: 'serious', value: 'serious', component: (<Text>serious</Text>) },
            { key: 4, label: 'angry', value: 'angry', component: (<Text>angry</Text>) },
            { key: 5, label: 'concerned', value: 'concerned', component: (<Text>concerned</Text>) }
        ]
    },
    {
        name: 'Mouth',
        label: 'mouth',
        type: 'strings',
        selectors: [
            { key: 1, label: 'grin', value: 'grin', component: (<Text>grin</Text>) },
            { key: 2, label: 'sad', value: 'sad', component: (<Text>sad</Text>) },
            { key: 3, label: 'openSmile', value: 'openSmile', component: (<Text>openSmile</Text>) },
            { key: 4, label: 'lips', value: 'lips', component: (<Text>lips</Text>) },
            { key: 5, label: 'open', value: 'open', component: (<Text>open</Text>) },
            { key: 6, label: 'serious', value: 'serious', component: (<Text>serious</Text>) },
            { key: 7, label: 'tongue', value: 'tongue', component: (<Text>tongue</Text>) },
            { key: 8, label: 'piercedTongue', value: 'piercedTongue', component: (<Text>piercedTongue</Text>) },
            { key: 9, label: 'vomitingRainbow', value: 'vomitingRainbow', component: (<Text>vomitingRainbow</Text>) }
        ],
        colors: {
            name: 'LipColor',
            label: 'lipColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: 'red', value: 'red', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.red }]}>
                            <Text style={{ color: 'white' }}>Rouge</Text>
                        </View>)
                },
                {
                    key: 2, label: 'purple', value: 'purple', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.purple }]}>
                            <Text style={{ color: 'white' }}>Pourpre</Text>
                        </View>)
                },
                {
                    key: 3, label: 'pink', value: 'pink', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.pink }]}>
                            <Text style={{ color: 'white' }}>Rose</Text>
                        </View>)
                },
                {
                    key: 4, label: 'turqoise', value: 'turqoise', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.turqoise }]}>
                            <Text style={{ color: 'white' }}>Turquoise</Text>
                        </View>)
                },
                {
                    key: 5, label: 'green', value: 'green', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.green }]}>
                            <Text style={{ color: 'white' }}>Vert</Text>
                        </View>)
                }
            ]
        }
    },
    {
        name: 'Facial hair',
        label: 'facialHair',
        label: 'facialHair',
        selectors: [
            { key: 1, label: 'none', value: 'none', component: (<Text>none</Text>) },
            { key: 2, label: 'stubble', value: 'stubble', component: (<Text>stubble</Text>) },
            { key: 3, label: 'mediumBeard', value: 'mediumBeard', component: (<Text>mediumBeard</Text>) },
            { key: 4, label: 'goatee', value: 'goatee', component: (<Text>goatee</Text>) }
        ]
    },
    {
        name: 'Skin tone',
        label: 'skinTone',
        type: 'colors',
        selectors: [
            { key: 1, label: 'light', value: 'light', component: (<Text>light</Text>) },
            { key: 2, label: 'yellow', value: 'yellow', component: (<Text>yellow</Text>) },
            { key: 3, label: 'brown', value: 'brown', component: (<Text>brown</Text>) },
            { key: 4, label: 'dark', value: 'dark', component: (<Text>dark</Text>) },
            { key: 5, label: 'red', value: 'red', component: (<Text>red</Text>) },
            { key: 6, label: 'black', value: 'black', component: (<Text>black</Text>) }
        ]
    },
    {
        name: 'Accessory',
        label: 'accessory',
        type: 'strings',
        selectors: [
            { key: 1, label: 'none', value: 'none', component: (<Text>none</Text>) },
            { key: 2, label: 'roundGlasses', value: 'roundGlasses', component: (<Text>roundGlasses</Text>) },
            { key: 3, label: 'tinyGlasses', value: 'tinyGlasses', component: (<Text>tinyGlasses</Text>) },
            { key: 4, label: 'shades', value: 'shades', component: (<Text>shades</Text>) },
            { key: 5, label: 'faceMask', value: 'faceMask', component: (<Text>faceMask</Text>) },
            { key: 6, label: 'hoopEarrings', value: 'hoopEarrings', component: (<Text>hoopEarrings</Text>) }
        ]
    },
    {
        name: 'Body',
        label: 'body',
        type: 'strings',
        selectors: [
            { key: 1, label: 'chest', value: 'chest', component: (<Text>chest</Text>) },
            { key: 2, label: 'breasts', value: 'breasts', component: (<Text>breasts</Text>) }
        ]
    },
    {
        name: 'Clothing',
        label: 'clothing',
        type: 'strings',
        selectors: [
            { key: 1, label: 'naked', value: 'naked', component: (<Text>naked</Text>) },
            { key: 2, label: 'shirt', value: 'shirt', component: (<Text>shirt</Text>) },
            { key: 3, label: 'dressShirt', value: 'dressShirt', component: (<Text>dressShirt</Text>) },
            { key: 4, label: 'vneck', value: 'vneck', component: (<Text>vneck</Text>) },
            { key: 5, label: 'tankTop', value: 'tankTop', component: (<Text>tankTop</Text>) },
            { key: 6, label: 'dress', value: 'dress', component: (<Text>dress</Text>) },
            { key: 7, label: 'denimJacket', value: 'denimJacket', component: (<Text>denimJacket</Text>) },
            { key: 8, label: 'hoodie', value: 'hoodie', component: (<Text>hoodie</Text>) },
            { key: 9, label: 'chequeredShirt', value: 'chequeredShirt', component: (<Text>chequeredShirt</Text>) },
            { key: 10, label: 'chequeredShirtDark', value: 'chequeredShirtDark', component: (<Text>chequeredShirtDark</Text>) }
        ],
        colors: {
            name: 'Clothing color',
            label: 'clothingColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: 'white', value: 'white', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.white }]}>
                            <Text style={{ color: 'black' }}>Blanc</Text>
                        </View>)
                },
                {
                    key: 2, label: 'blue', value: 'blue', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.blue }]}>
                            <Text style={{ color: 'white' }}>Bleu</Text>
                        </View>)
                },
                {
                    key: 3, label: 'black', value: 'black', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.black }]}>
                            <Text style={{ color: 'white' }}>Noir</Text>
                        </View>)
                },
                {
                    key: 4, label: 'green', value: 'green', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.green }]}>
                            <Text style={{ color: 'white' }}>Vert</Text>
                        </View>)
                },
                {
                    key: 5, label: 'red', value: 'red', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.red }]}>
                            <Text style={{ color: 'white' }}>Rouge</Text>
                        </View>)
                }
            ]
        }
    },
    {
        name: 'Graphic',
        label: 'graphic',
        type: 'strings',
        selectors: [
            { key: 1, label: 'none', value: 'none', component: (<Text>none</Text>) },
            { key: 2, label: 'redwood', value: 'redwood', component: (<Text>redwood</Text>) },
            { key: 3, label: 'gatsby', value: 'gatsby', component: (<Text>gatsby</Text>) },
            { key: 4, label: 'vue', value: 'vue', component: (<Text>vue</Text>) },
            { key: 5, label: 'react', value: 'react', component: (<Text>react</Text>) },
            { key: 6, label: 'graphQL', value: 'graphQL', component: (<Text>graphQL</Text>) },
            { key: 7, label: 'donut', value: 'donut', component: (<Text>donut</Text>) },
            { key: 8, label: 'rainbow', value: 'rainbow', component: (<Text>rainbow</Text>) }
        ]
    }
]