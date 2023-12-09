import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TermsAndConditions from '../../boards/Settings/Terms'
import { termsContent } from '../../keys/terms_contents'

export default function Terms() {
    
  return <TermsAndConditions contents={termsContent} />;
}