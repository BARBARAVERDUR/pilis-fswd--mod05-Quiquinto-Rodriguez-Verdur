import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils'
import { Pressable } from 'react-native' 

export function Fav ({isFav, handlePress=()=>[]}) {
    const [color, setColor] = useState(COLORS.inactive)

    const onPress = () => {
        if (isFav) {
            setColor(COLORS.primary)
        }else{ 
            setColor(COLORS.inactive)
        }
        handlePress()
    }

    return (
        <Pressable onPress={onPress}>
            <Ionicons name='star' size={20} color={color}/>
        </Pressable>
    )
}