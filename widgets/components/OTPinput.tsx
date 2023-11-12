import React, { useContext, useEffect, useRef, useState } from 'react';
import { Animated, Keyboard, Platform, StyleSheet, TextInput, View, Text } from 'react-native';
import { useKeyboard } from '../../Hooks/useKeyboard';
import themeContext from '../../Theme/theme';

const AuthPassword = ({ setPassword, password }) => {
  const [opacity] = useState(new Animated.Value(0));
  const [onFocus, setOnFocus] = useState(false);
  const color = useContext(themeContext);
  const [otp, setOtp] = useState({ 1: '', 2: '', 3: '', 4: '', 5: '', 6: '' });
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const inputRef4 = useRef();
  const inputRef5 = useRef();
  const inputRef6 = useRef();

  const handleOnFocus = () => {
    setOnFocus(true);
  };

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  useEffect(() => {
    setPassword(Object.values(otp).join(''));
  }, [otp]);

  console.log('OTP:', password);
  Animated.loop(
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <>
      <View style={styles.main}>
        {onFocus ? null : <Animated.Text style={[styles.indicator, { opacity }]}>|</Animated.Text>}
        <TextInput
          ref={inputRef1}
          onFocus={handleOnFocus}
          keyboardType='number-pad'
          autoFocus={Platform == 'ios' ? true : null}
          focusable={true}
          onChangeText={(t) => {
            setOtp({ ...otp, 1: t });
            t && inputRef2.current.focus();
          }}
          maxLength={1}
          style={[styles.input, { color: color.text }]}
        />
        <TextInput
          ref={inputRef2}
          onFocus={handleOnFocus}
          keyboardType='number-pad'
          autoFocus={Platform == 'ios' ? true : null}
          onChangeText={(t) => {
            setOtp({ ...otp, 2: t });
            t ? inputRef3.current.focus() : inputRef1.current.focus();
          }}
          maxLength={1}
          style={[styles.input, { color: color.text }]}
        />
        <TextInput
          ref={inputRef3}
          onFocus={handleOnFocus}
          keyboardType='number-pad'
          autoFocus={Platform == 'ios' ? true : null}
          onChangeText={(t) => {
            setOtp({ ...otp, 3: t });
            t ? inputRef4.current.focus() : inputRef2.current.focus();
          }}
          maxLength={1}
          style={[styles.input, { color: color.text }]}
        />
        <TextInput
          ref={inputRef4}
          onFocus={handleOnFocus}
          keyboardType='number-pad'
          autoFocus={Platform == 'ios' ? true : null}
          onChangeText={(t) => {
            setOtp({ ...otp, 4: t });
            t ? inputRef5.current.focus() : inputRef3.current.focus();
          }}
          maxLength={1}
          style={[styles.input, { color: color.text }]}
        />
        <TextInput
          ref={inputRef5}
          onFocus={handleOnFocus}
          keyboardType='number-pad'
          autoFocus={Platform == 'ios' ? true : null}
          onChangeText={(t) => {
            setOtp({ ...otp, 5: t });
            t ? inputRef6.current.focus() : inputRef4.current.focus();
          }}
          maxLength={1}
          style={[styles.input, { color: color.text }]}
        />
        <TextInput
          ref={inputRef6}
          onFocus={handleOnFocus}
          keyboardType='number-pad'
          autoFocus={Platform == 'ios' ? true : null}
          onChangeText={(t) => {
            setOtp({ ...otp, 6: t });
            !t && inputRef5.current.focus();
          }}
          maxLength={1}
          style={[styles.input, { color: color.text }]}
        />
      </View>
    </>
  );
};

export default AuthPassword;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 20,
    marginHorizontal: 5,
    fontSize: 24,
  },
  indicator: {
    fontSize: 42,
    fontWeight: 'bold',
  },
  line: {
    marginHorizontal: 8,
    height: 3,
    backgroundColor: 'black',
  },
});
