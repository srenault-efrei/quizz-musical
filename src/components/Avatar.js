import React from 'react'
import { BigHead } from 'react-native-bigheads'

const Avatar = (props) => {
    const { avatarProps } = props
    return (
        <BigHead
            accessory={avatarProps.accessory}
            bgColor={avatarProps.bgColor}
            bgShape={avatarProps.bgShape}
            body={avatarProps.body}
            clothing={avatarProps.clothing}
            clothingColor={avatarProps.clothingColor}
            eyebrows={avatarProps.eyebrows}
            eyes={avatarProps.eyes}
            facialHair={avatarProps.facialHair}
            graphic={avatarProps.graphic}
            hair={avatarProps.hair}
            hairColor={avatarProps.hairColor}
            hat={avatarProps.hat}
            hatColor={avatarProps.hatColor}
            lashes={avatarProps.lashes}
            lipColor={avatarProps.lipColor}
            mouth={avatarProps.mouth}
            showBackground={avatarProps.showBackground}
            size={200}
            skinTone={avatarProps.skinTone}
        />
    )
}

export default Avatar
