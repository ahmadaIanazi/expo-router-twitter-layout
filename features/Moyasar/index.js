import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import PaymentView from './pay';
import Header from '../../widgets/header';
import themeContext from '../@context/theme';
import Section from '../../widgets/section';
import { SafeAreaView } from 'react-native-safe-area-context';

const { height, width } = Dimensions.get('screen');

export default function ScreenPayment() {
  const color = useContext(themeContext);
  const [paid, setPaid] = useState(false);
  const [progress, setProgress] = useState('Progress');
  const [state, setState] = useState('state');
  const [loading, setLoading] = useState(false);
  const [titleUrl, setTitleUrl] = useState('');

  // initiated	||First status of a payment. It indicates that the payment has been created but card holder did not pay yet.
  // paid     	||Payment reaches this status when card holder pays successfully.
  // failed   	||Payment reaches this status when card holder or merchant has a certain error that caused the payment to fail (errors are attched to the payment object message attribute).
  // authorized	||Payment reaches this status when merchant authorizes it to be manually captured anytime later— card holder is not charged yet.
  // captured 	||Payment reaches this status when card holder of an authorized payment is charged successfully.
  // refunded 	||Payment reaches this status when merchant refunds a paid or captured payment successfully.
  // voided   	||Payment reaches this status when merchant cancels a paid, authorized or captured payment. It works only if the amount is not settled yet in the merchant’s bank account.

  return (
    <View style={{ flex: 1, backgroundColor: color.background }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Header title='Payment' back={true} />
        <View style={styles.progressWrap}>
          <Section title={progress} subtitle={state} />
          <Text>{titleUrl}</Text>
          <View style={styles.progressBarsBox}>
            <View style={[styles.progressBar, { backgroundColor: color.light }]} />
            <View style={[styles.progressBar, { backgroundColor: color.light }]} />
            <View style={[styles.progressBar, { backgroundColor: color.light }]} />
          </View>
        </View>
        {loading && <Text>Loading ...</Text>}
        {paid && <Text>Payment Completed Thanks !</Text>}
        <PaymentView
          setLoading={setLoading}
          setState={setState}
          setProgress={setProgress}
          setTitleUrl={setTitleUrl}
          setPaid={setPaid}
          amount={'1000'}
          description={'Not Coffee This time #2'}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  progressWrap: {
    marginHorizontal: 20,
  },
  progressBarsBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBar: {
    width: width / 4,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'grey',
  },
});
