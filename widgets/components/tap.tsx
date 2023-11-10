import { TouchableOpacity, ViewStyle } from 'react-native';

import { applyStyles } from '../functions';

interface TapProps {
  s?: string;
  onPress?: () => void;
  style?: object;
  borderColor?: string;
  color?: string;
  children?: React.ReactNode;
}

export function Tap({ s, onPress, style = {}, borderColor, color, children, ...props }: TapProps) {
  const defaultStyle: ViewStyle | null = style ? {} : null;
  const appliedStyle = applyStyles(defaultStyle, s);
  const handleEmpty = () => {};
  const handler = onPress || handleEmpty;

  return (
    <TouchableOpacity onPress={handler} style={[appliedStyle, { ...style }]} {...props}>
      {children}
    </TouchableOpacity>
  );
}
