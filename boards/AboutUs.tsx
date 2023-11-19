import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, Text, List } from 'react-native-paper';
import { BackButton, Background, Logo } from '../widgets';

const AboutUs = ({ contents }) => {
  const renderAboutSections = (aboutSections) => {
    return aboutSections.map((section, index) => (
      <View key={index}>
        <Text style={styles.sectionHeader}>{section.title}</Text>
        {section.content.map((paragraph, paragraphIndex) => (
          <Text key={paragraphIndex} style={styles.paragraph}>
            {paragraph}
          </Text>
        ))}
        <Divider style={styles.divider} />
      </View>
    ));
  };

  const renderSocials = (socials) => {
    return (
      <List.Section>
        {socials.map((social, index) => (
          <List.Item
            key={index}
            title={social.content}
            left={(props) => <List.Icon {...props} icon={social.icon} />}
            onPress={() => {
              // Handle social link navigation
              console.log('Navigate to:', social.link);
            }}
          />
        ))}
      </List.Section>
    );
  };

  const renderContacts = (contacts) => {
    return (
      <List.Section>
        {contacts.map((contact, index) => (
          <List.Item
            key={index}
            title={contact.content}
            left={(props) => <List.Icon {...props} icon={contact.icon} />}
            onPress={() => {
              // Handle contact link navigation
              console.log('Contact:', contact.content);
            }}
          />
        ))}
      </List.Section>
    );
  };

  return (
    <Background safe='all'>
      <BackButton />
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />
        {contents.map((section, index) => (
          <View key={index}>
            {section.about && renderAboutSections(section.about)}
            {section.socials && renderSocials(section.socials)}
            {section.contacts && renderContacts(section.contacts)}
          </View>
        ))}
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sectionHeader: {
    fontSize: 24,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  divider: {
    marginVertical: 20,
  },
});

export default AboutUs;
