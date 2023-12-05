import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import Permissions from '../../boards/Global/Permissions';
import { permissionData } from '../../xonstant/permissions_setup';

export default function PermissionAccess() {
  const { access } = useLocalSearchParams();

  return <Permissions access={access} contents={permissionData} />;
}
