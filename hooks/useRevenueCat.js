import { Platform } from 'react-native';
import Purchases, { LOG_LEVEL } from 'react-native-purchases';
import { RevenueAPIkeys } from '../../ENV_revenueCat';
import { useEffect } from 'react';
import { usePaywallStore } from '../stores/usePaywallStore';

export default function useRevenueCat() {
  const { setCustomerInfo, setCurrentOffering, setOffering } = usePaywallStore();

  useEffect(() => {
    const configureRevenueCat = async () => {
      try {
        Purchases.setLogLevel(LOG_LEVEL.DEBUG);

        if (Platform.OS == 'android') {
          await Purchases.configure({ apiKey: RevenueAPIkeys.google });
        } else {
          await Purchases.configure({ apiKey: RevenueAPIkeys.apple });
        }

        const offerings = await Purchases.getOfferings();
        setOffering(offerings);

        // Check if offerings.current is defined before accessing properties
        if (offerings.current && offerings.current.availablePackages?.length !== 0) {
          setCurrentOffering(offerings.current);
        }

        const customerInfo = await Purchases.getCustomerInfo();
        setCustomerInfo(customerInfo);
      } catch (error) {
        // Handle the error appropriately
        console.error('Error configuring RevenueCat:', error);
      }
    };

    configureRevenueCat();
  }, []);

  useEffect(() => {
    const customerInfoUpdate = async (customerInfo) => {
      setCustomerInfo(customerInfo);
    };

    const listener = Purchases.addCustomerInfoUpdateListener(customerInfoUpdate);

    // Clean up the listener when the component unmounts
    return () => {
      listener?.remove();
    };
  }, []);
}

// import { Platform } from 'react-native';
// import Purchases, { LOG_LEVEL } from 'react-native-purchases';
// import { RevenueAPIkeys } from '../../ENV_revenueCat';
// import { useEffect } from 'react';
// import { usePaywallStore } from '../stores/usePaywallStore';

// export default function useRevenueCat() {
//   const {
//     customerInfo,
//     setCustomerInfo,
//     currentOffering,
//     setCurrentOffering,
//     setOffering,
//     isSubscribed,
//     setIsSubscribed,
//     entitlements,
//     setEntitlements,
//   } = usePaywallStore();

//   useEffect(() => {
//     const configureRevenueCat = async () => {
//       Purchases.setLogLevel(LOG_LEVEL.DEBUG);

//       if (Platform.OS == 'android') {
//         await Purchases.configure({ apiKey: RevenueAPIkeys.google });
//       } else {
//         await Purchases.configure({ apiKey: RevenueAPIkeys.apple });
//       }

//       const offerings = await Purchases.getOfferings();
//       setOffering(offerings);
//       if (offerings.current !== null && offerings.current.availablePackages?.length !== 0) {
//         setCurrentOffering(offerings.current);
//       }

//       const customerInfo = await Purchases.getCustomerInfo();
//       setCustomerInfo(customerInfo);
//     };

//     configureRevenueCat();
//   }, []);

//   useEffect(() => {
//     const customerInfoUpdate = async (customerInfo) => {
//       setCustomerInfo(customerInfo);
//     };

//     Purchases.addCustomerInfoUpdateListener(customerInfoUpdate);
//   }, []);

// }
