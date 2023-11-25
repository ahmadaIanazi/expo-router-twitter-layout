import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePlatformStore } from '../stores'

export default function useResponsive() {
  const { height, width, isDesktop, isTablet, isMobile, deviceType } =
    usePlatformStore()
  const { top, bottom, left, right } = useSafeAreaInsets()

  const getDrawerResponsive = () => {
    let drawerWidth = '60%'
    let drawerType = 'slide'
    let showLabel = true

    switch (deviceType) {
      case 'Desktop':
        drawerWidth = '30%'
        drawerType = 'permanent'
        break
      case 'Tablet':
        drawerWidth = '10%'
        drawerType = 'permanent'
        showLabel = false
        break
      case 'Mobile':
        drawerWidth = '75%'
        drawerType = 'slide'
        break
      default:
        break
    }

    return { drawerWidth, drawerType, showLabel }
  }

  const getHeaderResponsive = () => {
    const dynamicHeaderHeight = height / 24
    const dynamicLargeHeaderHeight = dynamicHeaderHeight * 4
    const dynamicMinimizeTo = dynamicHeaderHeight / 1.5

    let headerHeight = dynamicHeaderHeight + top
    let largeHeaderHeight = dynamicLargeHeaderHeight + top
    let minimizeTo = dynamicMinimizeTo + top

    // if (width < height) {
    //   // Portrait mode - ensure width is no larger than height
    //   headerHeight = Math.min(headerHeight, width);
    //   largeHeaderHeight = Math.min(largeHeaderHeight, width * 4);
    //   minimizeTo = Math.min(minimizeTo, width / 1.5);
    // }

    let disappearTo = top + 20 + headerHeight
    let largeDisappearTo = top + largeHeaderHeight
    // Clean up
    headerHeight = Math.floor(headerHeight)
    largeHeaderHeight = Math.floor(largeHeaderHeight)
    minimizeTo = Math.floor(minimizeTo)
    disappearTo = Math.floor(disappearTo)
    largeDisappearTo = Math.floor(largeDisappearTo)
    let safePadding = Math.floor(disappearTo)

    return {
      headerHeight,
      largeHeaderHeight,
      minimizeTo,
      disappearTo,
      largeDisappearTo,
      safePadding,
    }
  }

  const getTopTabBarResponsive = () => {
    const dynamicHeaderHeight = height / 24

    let headerHeight = dynamicHeaderHeight / 2
    return {
      headerHeight,
    }
  }

  return {
    drawer: getDrawerResponsive(),
    header: getHeaderResponsive(),
    topTabBar: getTopTabBarResponsive(),
    width,
    height,
  }
}
