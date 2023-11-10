import React, { ReactNode } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView as ScrollViewReact } from 'react-native-gesture-handler';

export default function ScrollView({
  children,
  ...props
}: {
  children: ReactNode;
}): React.JSX.Element {
  return (
    <ScrollViewReact
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      {...props}
    >
      {children}
    </ScrollViewReact>
  );
}
