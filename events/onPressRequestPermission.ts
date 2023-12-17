import { router } from 'expo-router'
import { managePermissions } from '../managers/managePermissions'
import { RouteNames } from '../app/_layout/constants'

function onPressRequestPermission() {
  const { checkAndRequestPermission, checkPermission } = managePermissions()

  const handleRequestPermission = async (permissionType) => {
    await checkAndRequestPermission(permissionType)

    router.setParams(permissionType)
    router.push(RouteNames.permssions)
  }

  const handleCheckPermission = async (permissionType) => {
    const hasPermission = await checkPermission(permissionType)
    return hasPermission
  }

  return {
    handleRequestPermission,
    handleCheckPermission,
  }
}

export default onPressRequestPermission
