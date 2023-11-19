import { Stack } from 'expo-router';
import React from 'react';

export default function Posts_layout() {
  return (
    <Stack>
      <Stack.Screen
        name='[param]'
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
