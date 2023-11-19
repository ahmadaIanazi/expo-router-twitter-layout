import { onboardBones, onboardBonesAR } from '../xonstant/onboard_setup';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import {OnboardingButton} from '../widgets';

import Localization from '../translations/_context';
import { router } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useScreensStore } from '../stores/useScreensStore';
import { useRemoteStore } from '../stores/useRemoteStore';
import {OnboardSlider} from '../widgets';
import {SliderIndicator} from '../widgets';
 
export default function Introduction() {
  const colors = useTheme();
  const l = useContext(Localization);
  const { shared } = useRemoteStore();
  const { setSeenOnboard } = useScreensStore();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [lastSlide, setLastSlide] = useState(false);
  const [loading, setLoading] = useState(false);
  const { height, width } = Dimensions.get('window');
  const slidesRef = useRef();

  const SKIP = shared?.stop_onboard;

  const data = l.l == 'ar' ? onboardBonesAR : onboardBones;

  useEffect(() => {
    if (currentSlideIndex == data?.length - 1) {
      setLastSlide(true);
    } else {
      setLastSlide(false);
    }
  }, [currentSlideIndex]);

  useEffect(() => {
    if (SKIP) {
      console.log('SKIP');
      setSeenOnboard(true);
      setLoading(true);
      router.replace('/Welcome');
    }
  }, [SKIP]);

  const handleOnPress = () => {
    if (currentSlideIndex == data?.length - 1) {
      setSeenOnboard(true);
      setLoading(true);
      router.replace('/Welcome');
    } else {
      goNextSlide();
    }
  };

  const onMomentum = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };
  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const nextSlideOffset = nextSlideIndex * width;
    slidesRef?.current?.scrollToOffset({ offset: nextSlideOffset });
    setCurrentSlideIndex(nextSlideIndex);
  };

  // Function to navigate to a specific card
  const navigateToCard = (index) => {
    const nextSlideOffset = index * width;
    slidesRef?.current?.scrollToOffset({ offset: nextSlideOffset });
    setCurrentSlideIndex(index);
  };

  const RENDEROnboardSlider = ({ item }) => <OnboardSlider item={item} />;

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: colors.colors.tertiaryContainer }]}>
      <View style={{ height: height * 0.8, width: width }}>
        <FlatList
          ref={slidesRef}
          style={{ width: width, height: height * 0.75 }}
          horizontal
          pagingEnabled
          data={data}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onMomentum}
          renderItem={RENDEROnboardSlider}
        />
      </View>
      <View style={styles.indicators}>
        {data?.map((_, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToCard(index)}>
            <SliderIndicator currentSlideIndex={currentSlideIndex} key={index} index={index} />
          </TouchableOpacity>
        ))}
      </View>
      <OnboardingButton loading={loading} lastSlide={lastSlide} handleOnPress={handleOnPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 3,
  },
  indicators: {
    bottom: 70,
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
