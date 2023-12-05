import { Button, Icon, Text } from 'react-native-paper';
import { Safe, View } from '../../widgets';

export default function EmptyState() {
    return (
        <Safe safe='all' align='center'>
            <View s='p-20 c'>
                <Icon source='bell' size={200} />
                <Text variant='displaySmall'>Get More!</Text>
                <Text variant='headlineMedium'>Add your vehicle</Text>
                <Text variant='bodyMedium'>
                    Ad non excepteur mollit duis
                    aute mollit cupidatat irure eu.
                </Text>
                <Button mode='contained'>Get Started</Button>
                <Button mode='text'>Skip for now</Button>
            </View>
        </Safe>
    );
}
