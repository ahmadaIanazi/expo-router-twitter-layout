import { router } from 'expo-router'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PaperIcons as Icon } from '../components/PaperIcons'
import { Tap } from '../components/tap'

export default function BackButton() {
  const insents = useSafeAreaInsets()

  return (
    <Tap
      onPress={() => router.back()}
      s='l-4 absolute'
      style={{
        zIndex: 10,
        top: 10 + insents.top,
      }}
    >
      <Icon size={30} source='chevron-left' />
    </Tap>
  )
}
