import { create } from 'zustand';

export const usePaywallStore = create((set, get) => ({
  userDetails: null,
  setUserDetails: (res) => {
    set({ userDetails: res });
  },
  customerInfo: null,
  setCustomerInfo: (customerInfo) => {
    const activeSubscriptions = customerInfo?.activeSubscriptions;
    const allExpirationDates = customerInfo?.allExpirationDates;
    const allPurchaseDates = customerInfo?.allPurchaseDates;
    const allPurchasedProductIdentifiers = customerInfo?.allPurchasedProductIdentifiers;
    const ActiveEntitlements = customerInfo?.entitlements?.active;
    const AllEntitlements = customerInfo?.entitlements?.all;
    const latestExpirationDate = customerInfo?.latestExpirationDate;
    const originalAppUserId = customerInfo?.originalAppUserId;
    const nonSubscriptionTransactions = customerInfo?.nonSubscriptionTransactions;
    const originalApplicationVersion = customerInfo?.originalApplicationVersion;
    const originalPurchaseDate = customerInfo?.originalPurchaseDate;
    const requestDate = customerInfo?.requestDate;
    
    console.log('activeSubscriptions', activeSubscriptions);
    console.log('AllEntitlements', AllEntitlements);
    set({ customerInfo: customerInfo });
    set({ activeSubscriptions: activeSubscriptions });
    set({ allExpirationDates: allExpirationDates });
    set({ allPurchaseDates: allPurchaseDates });
    set({ allPurchasedProductIdentifiers: allPurchasedProductIdentifiers });
    set({ ActiveEntitlements: ActiveEntitlements });
    set({ AllEntitlements: AllEntitlements });
    set({ latestExpirationDate: latestExpirationDate });
    set({ originalAppUserId: originalAppUserId });
    set({ nonSubscriptionTransactions: nonSubscriptionTransactions });
    set({ originalApplicationVersion: originalApplicationVersion });
    set({ originalPurchaseDate: originalPurchaseDate });
    set({ requestDate: requestDate });
  },
  currentOffering: null,
  setCurrentOffering: (res) => {
    set({ currentOffering: res });
  },
  offerings: null,
  setOffering: (res) => {
    set({ offerings: res });
  },
  isSubscribed: null,
  setIsSubscribed: (res) => {
    set({ isSubscribed: res });
  },
  entitlements: null,
  setEntitlements: (res) => {
    set({ entitlements: res });
  },
  activeSubscriptions: null,
allExpirationDates: null,
allPurchaseDates: null,
allPurchasedProductIdentifiers: null,
ActiveEntitlements: null,
AllEntitlements: null,
latestExpirationDate: null,
originalAppUserId: null,
nonSubscriptionTransactions: null,
originalApplicationVersion: null,
originalPurchaseDate: null,
requestDate: null,
})); 