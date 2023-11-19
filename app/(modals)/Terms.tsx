import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TermsAndConditions from '../../boards/Terms'
import { termsContent } from '../../xonstant/terms_contents'

export default function Terms() {
    
  return <TermsAndConditions contents={termsContent} />;
}