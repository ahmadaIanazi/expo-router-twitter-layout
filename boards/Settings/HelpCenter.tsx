import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TextInput, Button, Snackbar, Title } from 'react-native-paper';
import { BackButton, Background } from '../../widgets';

const HelpCenter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleSubmit = () => {
    // Here, you can implement the logic to handle form submission (e.g., send data to server)

    // For demo purposes, just show a Snackbar to simulate form submission
    setSnackbarVisible(true);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Background>
      <BackButton />
      <ScrollView contentContainerStyle={styles.container}>
        <Title style={styles.header}>Contact Customer Support</Title>
        <TextInput
          label='Name'
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          label='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
          style={styles.input}
        />
        <TextInput
          label='Message'
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
          numberOfLines={5}
          style={styles.input}
        />
        <Button mode='contained' onPress={handleSubmit} style={styles.submitButton}>
          Submit
        </Button>
      </ScrollView>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        style={styles.snackbar}
      >
        Message sent! We'll get back to you soon.
      </Snackbar>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 40,
    alignSelf: 'center',
    width: '50%',
  },
  snackbar: {
    marginBottom: 60,
  },
});

export default HelpCenter;
