import React, { useEffect, useState } from 'react';
import { View, TextInput as Input } from 'react-native';
import { Text, useTheme, TextInput } from 'react-native-paper';

interface OTPInputProps {
  value?: string;
  onChangeText?: (data: { value: string; error: string }) => void;
  mode?: 'flat' | 'outlined';
  textSize?: number;
}

const OTPpaper = ({ value = '', onChangeText, mode = 'flat', textSize = 14 }: OTPInputProps) => {
  const colors = useTheme();
  const inputRefs: any = [];
  const [otp, setOTP] = useState(value);

  useEffect(() => {
    handleAutoFocus();
  }, []);

  const handleAutoFocus = () => {
    inputRefs[0].focus();
  };

  const handleOTPChange = (index: number, text: string) => {
    inputRefs[index].focus();
    let updatedOTP = otp.split('');
    updatedOTP[index] = text;
    
    if (text?.length === 6 && index === 0) {
      inputRefs[5].focus();
    }

    if (text !== '' && index < 5 && text.length !== 6) {
      inputRefs[index + 1].focus();
    }

    if (index === 5 && text !== '') {
      // Auto-submit when the last digit is entered
      // Add your submit logic here
      console.log('Auto Submit? on handle Change OTP');
    }

    setOTP(updatedOTP.join(''));
    onChangeText && onChangeText({value: updatedOTP.join(''), error: ''});
  };

  const handleBackspace = (index: number) => {
    if (index > 0) {
      inputRefs[index - 1].focus();
      let updatedOTP = otp.split('');
      updatedOTP[index - 1] = '';
      setOTP(updatedOTP.join(''));
      onChangeText && onChangeText({ value: updatedOTP.join(''), error: '' });
    } else {
      inputRefs[0].focus();
      setOTP('');
      onChangeText && onChangeText({ value: '', error: '' });
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {[0, 1, 2, 3, 4, 5].map((index) => (
        <TextInput
          mode={mode}
          textAlign='center'
          textAlignVertical='center'
          verticalAlign='middle'
          key={index}
          ref={(ref) => (inputRefs[index] = ref)}
          value={otp[index] || ''}
          onChangeText={(text) => handleOTPChange(index, text)}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(index);
            }
          }}
          maxLength={index === 0 ? 6 : 1}
          keyboardType='numeric'
          contentStyle={{
            textAlign: 'center',
            fontSize: textSize,
          }}
          style={{
            flex: 1,
            margin: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ))}
    </View>
  );
};

export default OTPpaper;