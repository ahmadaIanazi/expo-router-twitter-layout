import React from 'react';
import { Text } from 'react-native-paper';
import { openBrowser } from '../features/openBrowser';
import { View } from '../widgets';

interface TextAndLinkProps {
    text: string;
    url: string;
    linkText: string;
}

const TextAndLink: React.FC<TextAndLinkProps> = ({ text, url, linkText }) => {

    const onPressLink = () => {
        openBrowser(url);
    };

    // Check if both text and linkText are provided before rendering the component
    if (!text || !linkText) {
        return null; // Render nothing if either text or linkText is missing
    }

    return (
        <View s='absolute b-20 c'>
            <Text style={{ textAlign: 'center' }} variant='bodySmall'>{text}
                <Text onPress={onPressLink} style={{ textAlign: 'center', fontWeight:'bold' }} variant='bodySmall'> {linkText} </Text>
            </Text>
        </View>
    );
};

export default TextAndLink;
