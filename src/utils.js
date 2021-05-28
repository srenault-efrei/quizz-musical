import React from 'react'
import { View, Text } from 'react-native'

import styles from '../assets/styles/styles'

export const translatedValues = {
    hat: {
        title: 'chapeau', selectors: {
            none: 'aucun', beanie: 'bonnet', turban: 'turban', party: 'festif', hijab: 'hijab'
        }
    },
    hatColor: {
        title: 'couleur chapeau', selectors: {
            white: 'blanc', blue: 'bleu', black: 'noir', green: 'vert', red: 'rouge'
        }
    },
    hair: {
        title: 'cheveux', selectors: {
            none: 'chauve', long: 'longs', bun: 'chignon', short: 'courts', pixie: 'pixie', balding: 'dégarni', buzz: 'buzz', afro: 'afro', bob: 'carré', mohawk: 'mohawk'
        }
    },
    hairColor: {
        title: 'couleur cheveux', selectors: {
            blonde: 'blond', orange: 'orange', black: 'noir', white: 'blanc', brown: 'marron', blue: 'bleu', pink: 'rose'
        }
    },
    lashes: {
        title: 'cils', selectors: {
            true: 'avec', false: 'sans'
        }
    },
    eyes: {
        title: 'yeux', selectors: {
            normal: 'normal', leftTwitch: 'tic gauche', happy: 'heureux', content: 'contenu', squint: 'plissé', simple: 'petit', dizzy: 'malaise', wink: 'clin d\'oeil', hearts: 'coeur', crazy: 'fou', cute: 'mignon', dollars: 'dollars', stars: 'étoile', cyborg: 'cyborg', simplePatch: 'bandeau', piratePatch: 'pirate'
        }
    },
    eyebrows: {
        title: 'sourcils', selectors: {
            raised: 'levé', leftLowered: 'gauche baissé', serious: 'sérieux', angry: 'en colère', concerned: 'inquiet'
        }
    },
    mouth: {
        title: 'bouche', selectors: {
            grin: 'sourire', sad: 'triste', openSmile: 'sourire ouvert', lips: 'lèvres', open: 'ouverte', serious: 'sérieux', tongue: 'langue', piercedTongue: 'percing langue', vomitingRainbow: 'vomi arc-en-ciel'
        }
    },
    lipColor: {
        title: 'couleur lèvres', selectors: {
            red: 'red', purple: 'pourpre', pink: 'rose', turqoise: 'turquoise', green: 'vert'
        }
    },
    facialHair: {
        title: 'barbe', selectors: {
            none: 'imberbe', stubble: 'poils', mediumBeard: 'moyenne', goatee: 'bouc'
        }
    },
    accessory: {
        title: 'accessoires', selectors: {
            none: 'aucun', roundGlasses: 'lunettes rondes', tinyGlasses: 'petites lunettes', shades: 'lunettes de soleil', faceMask: 'masque', hoopEarrings: 'boucles d\'oreilles'
        }
    },
    skinTone: {
        title: 'teint peau', selectors: {
            light: 'clair', yellow: 'jaune', brown: 'marron', dark: 'foncé', red: 'rouge', black: 'noir'
        }
    },
    body: {
        title: 'corps', selectors: {
            chest: 'torse', breasts: 'poitrine'
        }
    },
    clothing: {
        title: 'vêtement', selectors: {
            naked: 'nu', shirt: 't-shirt', dressShirt: 'chemise', vneck: 't-shirt v', tankTop: 'débardeur', dress: 'robe', denimJacket: 'veste jean', hoodie: 'sweat', chequeredShirt: 'chemise à carreaux', chequeredShirtDark: 'chemise à carreaux sombre'
        }
    },
    clothingColor: {
        title: 'couleur vêtement', selectors: {
            white: 'blanc', blue: 'bleu', black: 'noir', green: 'vert', red: 'rouge'
        }
    },
    graphic: {
        title: 'logo vêtement', selectors: {
            none: 'aucun', redwood: 'redwood', gatsby: 'gatsby', vue: 'vue', react: 'react', graphQL: 'graphqL', donut: 'donut', rainbow: 'arc-en-ciel'
        }
    }
}

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
            { key: 1, label: translatedValues.hat.selectors.none, value: 'none', component: (<Text style={styles.textSelector}>{translatedValues.hat.selectors.none}</Text>) },
            { key: 2, label: translatedValues.hat.selectors.beanie, value: 'beanie', component: (<Text style={styles.textSelector}>{translatedValues.hat.selectors.beanie}</Text>) },
            { key: 3, label: translatedValues.hat.selectors.turban, value: 'turban', component: (<Text style={styles.textSelector}>{translatedValues.hat.selectors.turban}</Text>) },
            { key: 4, label: translatedValues.hat.selectors.party, value: 'party', component: (<Text style={styles.textSelector}>{translatedValues.hat.selectors.party}</Text>) },
            { key: 5, label: translatedValues.hat.selectors.hijab, value: 'hijab', component: (<Text style={styles.textSelector}>{translatedValues.hat.selectors.hijab}</Text>) }
        ],
        colors: {
            name: 'Hat color',
            label: 'hatColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: translatedValues.hatColor.selectors.white, value: 'white', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.white }]}>
                            <Text style={[styles.textSelector, { color: 'black' }]}>{translatedValues.hatColor.selectors.white}</Text>
                        </View>)
                },
                {
                    key: 2, label: translatedValues.hatColor.selectors.blue, value: 'blue', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.blue }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hatColor.selectors.blue}</Text>
                        </View>)
                },
                {
                    key: 3, label: translatedValues.hatColor.selectors.black, value: 'black', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.black }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hatColor.selectors.black}</Text>
                        </View>)
                },
                {
                    key: 4, label: translatedValues.hatColor.selectors.green, value: 'green', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.green }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hatColor.selectors.green}</Text>
                        </View>)
                },
                {
                    key: 5, label: translatedValues.hatColor.selectors.red, value: 'red', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hat.red }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hatColor.selectors.red}</Text>
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
            { key: 1, label: translatedValues.hair.selectors.none, value: 'none', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.none}</Text>) },
            { key: 2, label: translatedValues.hair.selectors.long, value: 'long', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.long}</Text>) },
            { key: 3, label: translatedValues.hair.selectors.bun, value: 'bun', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.bun}</Text>) },
            { key: 4, label: translatedValues.hair.selectors.short, value: 'short', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.short}</Text>) },
            { key: 5, label: translatedValues.hair.selectors.pixie, value: 'pixie', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.pixie}</Text>) },
            { key: 6, label: translatedValues.hair.selectors.balding, value: 'balding', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.balding}</Text>) },
            { key: 7, label: translatedValues.hair.selectors.buzz, value: 'buzz', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.buzz}</Text>) },
            { key: 8, label: translatedValues.hair.selectors.afro, value: 'afro', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.afro}</Text>) },
            { key: 9, label: translatedValues.hair.selectors.bob, value: 'bob', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.bob}</Text>) },
            { key: 10, label: translatedValues.hair.selectors.mohawk, value: 'mohawk', component: (<Text style={styles.textSelector}>{translatedValues.hair.selectors.mohawk}</Text>) }
        ],
        colors: {
            name: 'Hair color',
            label: 'hairColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: translatedValues.hairColor.selectors.blonde, value: 'blonde', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.blonde }]}>
                            <Text style={[styles.textSelector, { color: 'black' }]}>{translatedValues.hairColor.selectors.blonde}</Text>
                        </View>)
                },
                {
                    key: 2, label: translatedValues.hairColor.selectors.orange, value: 'orange', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.orange }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hairColor.selectors.orange}</Text>
                        </View>)
                },
                {
                    key: 3, label: translatedValues.hairColor.selectors.black, value: 'black', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.black }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hairColor.selectors.black}</Text>
                        </View>)
                },
                {
                    key: 4, label: translatedValues.hairColor.selectors.white, value: 'white', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.white }]}>
                            <Text style={[styles.textSelector, { color: 'black' }]}>{translatedValues.hairColor.selectors.white}</Text>
                        </View>)
                },
                {
                    key: 5, label: translatedValues.hairColor.selectors.brown, value: 'brown', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.brown }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hairColor.selectors.brown}</Text>
                        </View>)
                },
                {
                    key: 6, label: translatedValues.hairColor.selectors.blue, value: 'blue', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.blue }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hairColor.selectors.blue}</Text>
                        </View>)
                },
                {
                    key: 7, label: translatedValues.hairColor.selectors.pink, value: 'pink', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.hair.pink }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.hairColor.selectors.pink}</Text>
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
            { key: 1, label: translatedValues.lashes.selectors.true, value: true, component: (<Text style={styles.textSelector}>{translatedValues.lashes.selectors.true}</Text>) },
            { key: 2, label: translatedValues.lashes.selectors.false, value: false, component: (<Text style={styles.textSelector}>{translatedValues.lashes.selectors.false}</Text>) }
        ]
    },
    {
        name: 'Eyes',
        label: 'eyes',
        type: 'type',
        selectors: [
            { key: 1, label: translatedValues.eyes.selectors.normal, value: 'normal', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.normal}</Text>) },
            { key: 2, label: translatedValues.eyes.selectors.leftTwitch, value: 'leftTwitch', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.leftTwitch}</Text>) },
            { key: 3, label: translatedValues.eyes.selectors.happy, value: 'happy', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.happy}</Text>) },
            { key: 4, label: translatedValues.eyes.selectors.content, value: 'content', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.content}</Text>) },
            { key: 5, label: translatedValues.eyes.selectors.squint, value: 'squint', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.squint}</Text>) },
            { key: 6, label: translatedValues.eyes.selectors.simple, value: 'simple', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.simple}</Text>) },
            { key: 7, label: translatedValues.eyes.selectors.dizzy, value: 'dizzy', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.dizzy}</Text>) },
            { key: 8, label: translatedValues.eyes.selectors.wink, value: 'wink', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.wink}</Text>) },
            { key: 9, label: translatedValues.eyes.selectors.hearts, value: 'hearts', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.hearts}</Text>) },
            { key: 10, label: translatedValues.eyes.selectors.crazy, value: 'crazy', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.crazy}</Text>) },
            { key: 11, label: translatedValues.eyes.selectors.cute, value: 'cute', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.cute}</Text>) },
            { key: 12, label: translatedValues.eyes.selectors.dollars, value: 'dollars', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.dollars}</Text>) },
            { key: 13, label: translatedValues.eyes.selectors.stars, value: 'stars', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.stars}</Text>) },
            { key: 14, label: translatedValues.eyes.selectors.cyborg, value: 'cyborg', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.cyborg}</Text>) },
            { key: 15, label: translatedValues.eyes.selectors.simplePatch, value: 'simplePatch', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.simplePatch}</Text>) },
            { key: 16, label: translatedValues.eyes.selectors.piratePatch, value: 'piratePatch', component: (<Text style={styles.textSelector}>{translatedValues.eyes.selectors.piratePatch}</Text>) },
        ]
    },
    {
        name: 'Eyebrows',
        label: 'eyebrows',
        type: 'strings',
        selectors: [
            { key: 1, label: translatedValues.eyebrows.selectors.raised, value: 'raised', component: (<Text style={styles.textSelector}>{translatedValues.eyebrows.selectors.raised}</Text>) },
            { key: 2, label: translatedValues.eyebrows.selectors.leftLowered, value: 'leftLowered', component: (<Text style={styles.textSelector}>{translatedValues.eyebrows.selectors.leftLowered}</Text>) },
            { key: 3, label: translatedValues.eyebrows.selectors.serious, value: 'serious', component: (<Text style={styles.textSelector}>{translatedValues.eyebrows.selectors.serious}</Text>) },
            { key: 4, label: translatedValues.eyebrows.selectors.angry, value: 'angry', component: (<Text style={styles.textSelector}>{translatedValues.eyebrows.selectors.angry}</Text>) },
            { key: 5, label: translatedValues.eyebrows.selectors.concerned, value: 'concerned', component: (<Text style={styles.textSelector}>{translatedValues.eyebrows.selectors.concerned}</Text>) }
        ]
    },
    {
        name: 'Mouth',
        label: 'mouth',
        type: 'strings',
        selectors: [
            { key: 1, label: translatedValues.mouth.selectors.grin, value: 'grin', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.selectors.grin}</Text>) },
            { key: 2, label: translatedValues.mouth.selectors.sad, value: 'sad', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.sad}</Text>) },
            { key: 3, label: translatedValues.mouth.selectors.openSmile, value: 'openSmile', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.openSmile}</Text>) },
            { key: 4, label: translatedValues.mouth.selectors.lips, value: 'lips', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.lips}</Text>) },
            { key: 5, label: translatedValues.mouth.selectors.open, value: 'open', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.open}</Text>) },
            { key: 6, label: translatedValues.mouth.selectors.serious, value: 'serious', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.serious}</Text>) },
            { key: 7, label: translatedValues.mouth.selectors.tongue, value: 'tongue', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.tongue}</Text>) },
            { key: 8, label: translatedValues.mouth.selectors.piercedTongue, value: 'piercedTongue', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.piercedTongue}</Text>) },
            { key: 9, label: translatedValues.mouth.selectors.vomitingRainbow, value: 'vomitingRainbow', component: (<Text style={styles.textSelector}>{translatedValues.mouth.selectors.vomitingRainbow}</Text>) }
        ],
        colors: {
            name: 'LipColor',
            label: 'lipColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: translatedValues.lipColor.selectors.red, value: 'red', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.red }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.lipColor.selectors.red}</Text>
                        </View>)
                },
                {
                    key: 2, label: translatedValues.lipColor.selectors.purple, value: 'purple', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.purple }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.lipColor.selectors.purple}</Text>
                        </View>)
                },
                {
                    key: 3, label: translatedValues.lipColor.selectors.pink, value: 'pink', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.pink }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.lipColor.selectors.purple}</Text>
                        </View>)
                },
                {
                    key: 4, label: translatedValues.lipColor.selectors.turqoise, value: 'turqoise', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.turqoise }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.lipColor.selectors.turqoise}</Text>
                        </View>)
                },
                {
                    key: 5, label: translatedValues.lipColor.selectors.green, value: 'green', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.mouth.green }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.lipColor.selectors.green}</Text>
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
            { key: 1, label: translatedValues.facialHair.selectors.none, value: 'none', component: (<Text style={styles.textSelector}>{translatedValues.facialHair.selectors.none}</Text>) },
            { key: 2, label: translatedValues.facialHair.selectors.stubble, value: 'stubble', component: (<Text style={styles.textSelector}>{translatedValues.facialHair.selectors.stubble}</Text>) },
            { key: 3, label: translatedValues.facialHair.selectors.mediumBeard, value: 'mediumBeard', component: (<Text style={styles.textSelector}>{translatedValues.facialHair.selectors.mediumBeard}</Text>) },
            { key: 4, label: translatedValues.facialHair.selectors.goatee, value: 'goatee', component: (<Text style={styles.textSelector}>{translatedValues.facialHair.selectors.goatee}</Text>) }
        ]
    },
    {
        name: 'Skin tone',
        label: 'skinTone',
        type: 'colors',
        selectors: [
            { key: 1, label: translatedValues.skinTone.selectors.light, value: 'light', component: (<Text style={styles.textSelector}>{translatedValues.skinTone.selectors.light}</Text>) },
            { key: 2, label: translatedValues.skinTone.selectors.yellow, value: 'yellow', component: (<Text style={styles.textSelector}>{translatedValues.skinTone.selectors.yellow}</Text>) },
            { key: 3, label: translatedValues.skinTone.selectors.brown, value: 'brown', component: (<Text style={styles.textSelector}>{translatedValues.skinTone.selectors.brown}</Text>) },
            { key: 4, label: translatedValues.skinTone.selectors.dark, value: 'dark', component: (<Text style={styles.textSelector}>{translatedValues.skinTone.selectors.dark}</Text>) },
            { key: 5, label: translatedValues.skinTone.selectors.red, value: 'red', component: (<Text style={styles.textSelector}>{translatedValues.skinTone.selectors.red}</Text>) },
            { key: 6, label: translatedValues.skinTone.selectors.black, value: 'black', component: (<Text style={styles.textSelector}>{translatedValues.skinTone.selectors.black}</Text>) }
        ]
    },
    {
        name: 'Accessory',
        label: 'accessory',
        type: 'strings',
        selectors: [
            { key: 1, label: translatedValues.accessory.selectors.none, value: 'none', component: (<Text style={styles.textSelector}>{translatedValues.accessory.selectors.none}</Text>) },
            { key: 2, label: translatedValues.accessory.selectors.roundGlasses, value: 'roundGlasses', component: (<Text style={styles.textSelector}>{translatedValues.accessory.selectors.roundGlasses}</Text>) },
            { key: 3, label: translatedValues.accessory.selectors.tinyGlasses, value: 'tinyGlasses', component: (<Text style={styles.textSelector}>{translatedValues.accessory.selectors.tinyGlasses}</Text>) },
            { key: 4, label: translatedValues.accessory.selectors.shades, value: 'shades', component: (<Text style={styles.textSelector}>{translatedValues.accessory.selectors.shades}</Text>) },
            { key: 5, label: translatedValues.accessory.selectors.faceMask, value: 'faceMask', component: (<Text style={styles.textSelector}>{translatedValues.accessory.selectors.faceMask}</Text>) },
            { key: 6, label: translatedValues.accessory.selectors.hoopEarrings, value: 'hoopEarrings', component: (<Text style={styles.textSelector}>{translatedValues.accessory.selectors.hoopEarrings}</Text>) }
        ]
    },
    {
        name: 'Body',
        label: 'body',
        type: 'strings',
        selectors: [
            { key: 1, label: translatedValues.body.selectors.chest, value: 'chest', component: (<Text style={styles.textSelector}>{translatedValues.body.selectors.chest}</Text>) },
            { key: 2, label: translatedValues.body.selectors.breasts, value: 'breasts', component: (<Text style={styles.textSelector}>{translatedValues.body.selectors.breasts}</Text>) }
        ]
    },
    {
        name: 'Clothing',
        label: 'clothing',
        type: 'strings',
        selectors: [
            { key: 1, label: translatedValues.clothing.selectors.naked, value: 'naked', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.naked}</Text>) },
            { key: 2, label: translatedValues.clothing.selectors.shirt, value: 'shirt', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.shirt}</Text>) },
            { key: 3, label: translatedValues.clothing.selectors.dressShirt, value: 'dressShirt', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.dressShirt}</Text>) },
            { key: 4, label: translatedValues.clothing.selectors.vneck, value: 'vneck', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.vneck}</Text>) },
            { key: 5, label: translatedValues.clothing.selectors.tankTop, value: 'tankTop', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.tankTop}</Text>) },
            { key: 6, label: translatedValues.clothing.selectors.dress, value: 'dress', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.dress}</Text>) },
            { key: 7, label: translatedValues.clothing.selectors.denimJacket, value: 'denimJacket', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.denimJacket}</Text>) },
            { key: 8, label: translatedValues.clothing.selectors.hoodie, value: 'hoodie', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.hoodie}</Text>) },
            { key: 9, label: translatedValues.clothing.selectors.chequeredShirt, value: 'chequeredShirt', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.chequeredShirt}</Text>) },
            { key: 10, label: translatedValues.clothing.selectors.chequeredShirtDark, value: 'chequeredShirtDark', component: (<Text style={styles.textSelector}>{translatedValues.clothing.selectors.chequeredShirtDark}</Text>) }
        ],
        colors: {
            name: 'Clothing color',
            label: 'clothingColor',
            type: 'colors',
            selectors: [
                {
                    key: 1, label: translatedValues.clothingColor.selectors.white, value: 'white', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.white }]}>
                            <Text style={[styles.textSelector, { color: 'black' }]}>{translatedValues.clothingColor.selectors.white}</Text>
                        </View>)
                },
                {
                    key: 2, label: translatedValues.clothingColor.selectors.blue, value: 'blue', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.blue }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.clothingColor.selectors.blue}</Text>
                        </View>)
                },
                {
                    key: 3, label: translatedValues.clothingColor.selectors.black, value: 'black', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.black }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.clothingColor.selectors.black}</Text>
                        </View>)
                },
                {
                    key: 4, label: translatedValues.clothingColor.selectors.green, value: 'green', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.green }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.clothingColor.selectors.green}</Text>
                        </View>)
                },
                {
                    key: 5, label: translatedValues.clothingColor.selectors.red, value: 'red', component: (
                        <View style={[styles.colorViewSelector, { backgroundColor: colors.clothing.red }]}>
                            <Text style={[styles.textSelector, { color: 'white' }]}>{translatedValues.clothingColor.selectors.red}</Text>
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
            { key: 1, label: translatedValues.graphic.selectors.none, value: 'none', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.none}</Text>) },
            { key: 2, label: translatedValues.graphic.selectors.redwood, value: 'redwood', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.redwood}</Text>) },
            { key: 3, label: translatedValues.graphic.selectors.gatsby, value: 'gatsby', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.gatsby}</Text>) },
            { key: 4, label: translatedValues.graphic.selectors.vue, value: 'vue', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.vue}</Text>) },
            { key: 5, label: translatedValues.graphic.selectors.react, value: 'react', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.react}</Text>) },
            { key: 6, label: translatedValues.graphic.selectors.graphQL, value: 'graphQL', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.graphQL}</Text>) },
            { key: 7, label: translatedValues.graphic.selectors.donut, value: 'donut', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.donut}</Text>) },
            { key: 8, label: translatedValues.graphic.selectors.rainbow, value: 'rainbow', component: (<Text style={styles.textSelector}>{translatedValues.graphic.selectors.rainbow}</Text>) }
        ]
    }
]