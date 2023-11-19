import { useEffect } from 'react';
import { Alert } from 'react-native';
import { usePermissionStore } from '../stores';

export const managePermissions = () => {

  const { location, camera, setPermissionSeen } = usePermissionStore();

  const requestPermission = async (permissionType, permissionState) => {
    // Logic for handling different permissions goes here
    switch (permissionType) {
      case 'location':
        // Handle location permission logic here
        // For example, request location permission
        break;
      case 'camera':
        // Handle camera permission logic here
        // For example, request camera permission
        break;
      // Add cases for other permission types as needed
      default:
        break;
    }
    // After requesting, update the permission screen status
    setPermissionSeen(permissionType, true);
  };

  const checkAndRequestPermission = async (permissionType, permissionState) => {
    if (!permissionState) {
      // Permission hasn't been granted yet, request it
      await requestPermission(permissionType, permissionState);
    }
  };

  return {
    checkAndRequestPermission,
  };
};
