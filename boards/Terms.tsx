import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, Title, List } from 'react-native-paper';
import { BackButton, Background } from '../widgets';

const TermsAndConditions = ({ contents }) => {
  return (
    <Background>
      <BackButton />
      <ScrollView contentContainerStyle={styles.container}>
        {contents.map((section, index) => (
          <React.Fragment key={index}>
            <Title style={styles.sectionHeader}>{section.header}</Title>

            {section.subsections &&
              section.subsections.map((sub, subIndex) => (
                <React.Fragment key={subIndex}>
                  <Text style={styles.subsectionTitle}>{sub.title}</Text>
                  <Text style={styles.subsectionDescription}>{sub.description}</Text>
                </React.Fragment>
              ))}

            {section.bulletPoints && (
              <React.Fragment>
                <List.Section style={styles.bulletPointsList}>
                  {section.bulletPoints.map((bullet, bulletIndex) => (
                    <List.Item
                      key={bulletIndex}
                      title={bullet}
                      titleNumberOfLines={10}
                      titleStyle={styles.bulletPointText}
                    />
                  ))}
                </List.Section>
              </React.Fragment>
            )}
          </React.Fragment>
        ))}
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionHeader: {
    fontSize: 20,
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subsectionDescription: {
    fontSize: 14,
    marginBottom: 10,
  },
  bulletPointsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  bulletPointsList: {
    marginLeft: 10,
  },
  bulletPointText: {
    fontSize: 14,
  },
});

export default TermsAndConditions;
