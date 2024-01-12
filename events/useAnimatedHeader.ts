import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import useResponsive from "../hooks/useResponsive";
import { useAnimationStore } from "../stores/animation";

const { diffClamp } = Animated;

export default function useAnimatedHeader() {
  const { setAppBarTranslateY } = useAnimationStore()
  const { header } = useResponsive()

  const scrollY = useRef(new Animated.Value(0)).current

  const scrollYClamped = diffClamp(scrollY, 0, header.headerHeight)

  const translateY = scrollYClamped.interpolate({
    inputRange: [0, header.headerHeight],
    outputRange: [0, -header.disappearTo],
  })

  const handleOnScroll = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y
    
    if (offsetY < 0) {
      /* Maybe Later I can Make the header Expands or its gets pulled ! */
    } else {
      scrollY.setValue(offsetY)
    }
  }

  useEffect(()=>{
      setAppBarTranslateY(translateY)

      return () => {}
  },[])

  return {
    handleOnScroll,
  }
}
