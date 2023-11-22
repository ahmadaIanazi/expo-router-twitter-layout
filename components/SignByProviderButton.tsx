import * as AppleAuthentication from 'expo-apple-authentication';
import React, { useContext, useEffect, useState } from 'react'
import { useTheme } from 'react-native-paper'
import Localization from '../translations'
import { Button } from '../widgets'

export default function SignByProviderButton({ type, loading, onPress }) {
    const l = useContext(Localization)
    const colors = useTheme()

    const [appleAuthAvailable, setAppleAuthAvailable] = useState(false);

    useEffect(() => {
        const checkAvailable = async () => {
            const isAvailable = await AppleAuthentication.isAvailableAsync();
            setAppleAuthAvailable(isAvailable);
        }
        checkAvailable();
    }, []);

    let color, labelColor, text, show = true, mode = 'contained';
    
    switch (true) {
        case type == 'phone':
            color = colors.colors.primary
            labelColor = colors.colors.onPrimary
            text = l.continue_with_phone
            break;
        case type == 'email':
            color = colors.colors.background
            labelColor = colors.colors.primary
            text = l.continue_with_email
            mode = 'outlined'
            break;
        case type == 'google':
            color = colors.colors.tertiary
            labelColor = colors.colors.onTertiary
            text = l.continue_with_google
            break;
        case type == 'apple':
            color = colors.colors.onBackground
            labelColor = colors.colors.background
            text = l.continue_with_apple
            show = appleAuthAvailable
            break;
        default:
            break;
    }

    return show && (
        <Button
            labelStyle={{ color: labelColor }}
            loading={loading} onPress={onPress} mode={mode} icon={type} theme={{ colors: { primary: color } }}>
            {text}
        </Button>
    )
}

