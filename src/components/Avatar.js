import React from 'react';
import { BigHead } from 'react-native-bigheads'

const Avatar = (props) => {
    return (
        <BigHead
            accessory="shades"
            bgColor="white"
            bgShape="circle"
            body="chest"
            clothing="tankTop"
            clothingColor="black"
            eyebrows="angry"
            eyes="wink"
            facialHair="mediumBeard"
            graphic="vue"
            hair="short"
            hairColor={props.hairColor}
            hat="none"
            hatColor="green"
            lashes={false}
            lipColor="purple"
            mouth="open"
            showBackground={true}
            size={300}
            skinTone="brown"
        />
    )
}

export default Avatar