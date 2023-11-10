import { useEffect } from 'react';

import { getCustomers } from '../data/get/getCustomers';
import { useUserStore } from '../stores/useUserStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useDataStore } from '../stores/useDataStore';

export const useCustomers = () => {
  const { role, uid, merchantId } = useUserStore();
  const { setCustomers } = useDataStore();

  const user = useUserStore((state) => state.user);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  useEffect(() => {
    let unsubscribe;
    if (!isAnonymous || isAnonymous) {
      if (user && role) {
        const userId = role === 'merchant' ? uid : merchantId || '';
        console.log('userId:', userId)
        unsubscribe = getCustomers(userId, setCustomers);
      }
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, isAnonymous, role, uid, merchantId]);
};