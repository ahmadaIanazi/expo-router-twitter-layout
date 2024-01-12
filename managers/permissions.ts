import { useEffect } from 'react'
import { Alert } from 'react-native'
import * as Permissions from 'expo-permissions'
import { usePermissionStore } from '../stores'

export const managePermissions = () => {
  const { setPermissionSeen } = usePermissionStore()

  const requestPermission = async (permissionType) => {
    let result
    switch (permissionType) {
      case 'LOCATION':
        result = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
        break
      case 'CAMERA':
        result = await Permissions.askAsync(Permissions.CAMERA)
        break
      case 'AUDIO_RECORDING':
        result = await Permissions.askAsync(Permissions.AUDIO_RECORDING)
        break
      case 'CALENDAR':
        result = await Permissions.askAsync(Permissions.CALENDAR)
        break
      case 'CONTACTS':
        result = await Permissions.askAsync(Permissions.CONTACTS)
        break
      case 'MEDIA_LIBRARY':
        result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY)
        break
      case 'NOTIFICATIONS':
        result = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        break
      case 'REMINDERS':
        result = await Permissions.askAsync(Permissions.REMINDERS)
        break
      case 'MOTION':
        result = await Permissions.askAsync(Permissions.MOTION)
        break
      case 'LOCATION_BACKGROUND':
        result = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND)
        break
      case 'LOCATION_FOREGROUND':
        result = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND)
        break
      case 'SYSTEM_BRIGHTNESS':
        result = await Permissions.askAsync(Permissions.SYSTEM_BRIGHTNESS)
        break
      case 'MEDIA_LIBRARY_WRITE_ONLY':
        result = await Permissions.askAsync(Permissions.MEDIA_LIBRARY_WRITE_ONLY)
        break
      // Add cases for other permission types as needed
      default:
        break
    }

    if (result.status !== 'granted') {
      Alert.alert('Permission not granted')
    }

    setPermissionSeen(permissionType, true)
  }

  const checkAndRequestPermission = async (permissionType) => {
    const { status } = await Permissions.getAsync(permissionType)
    if (status !== 'granted') {
      await requestPermission(permissionType)
    }
  }

  const checkPermission = async (permissionType) => {
    const { status } = await Permissions.getAsync(permissionType)
    return status === 'granted'
  }

  return {
    checkAndRequestPermission,
    checkPermission,
  }
}
