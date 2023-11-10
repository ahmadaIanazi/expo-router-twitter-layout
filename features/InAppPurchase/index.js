import Purchases from 'react-native-purchases';

export const handlePurchaseProduct = (pickedOffer) => {
  return new Promise(async (resolve, reject) => {
    try {
      const purchaserInfo = await Purchases.purchasePackage(pickedOffer);
      console.log('handlePurchaseProduct TRIGGERED!');
      const log = purchaserInfo.customerInfo.entitlements.active;
      console.log('handlePurchaseProduct ENTITLEMENT', log);
      resolve(purchaserInfo);
    } catch (error) {
      console.log('ERROR:', error)
      reject(error);
    }
  });
};

export const handleRestorePurchase = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const purchaserInfo = await Purchases.restorePurchases();
      console.log('PURCHASES RESTORE?:', purchaserInfo);
      resolve(purchaserInfo);
    } catch (error) {
      reject(error);
    }
  });
};
