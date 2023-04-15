import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils'
import { Pressable } from 'react-native' 

export function Fav () {
    const [color, setColor] = useState(COLORS.inactive)

    const handleClick = () => {
        if (color===COLORS.inactive) {
            setColor(COLORS.primary)
        }else{
            setColor(COLORS.inactive)
        }
    }

    return (
        <Pressable onPress={handleClick}>
            <Ionicons name='star' size={20} color={color}/>
        </Pressable>
    )
}