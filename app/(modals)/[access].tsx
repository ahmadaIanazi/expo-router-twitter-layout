import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import Permissions from '../../boards/Global/Permissions';
import { permissionData } from '../../keys/permissions_setup';

export default function PermissionAccess() {
  const { access } = useLocalSearchParams();

  console.log('ACCESS', access)
  return access && <Permissions access={access} contents={permissionData} />;
}
