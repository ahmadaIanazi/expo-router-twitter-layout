import { useEffect } from 'react';

import { getTransactions } from '../data/get/getTransactions';
import { useUserStore } from '../stores/useUserStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useDataStore } from '../stores/useDataStore';

export const useTransactions = () => {

  const { role, uid, merchantId } = useUserStore();
  const { setTransactions } = useDataStore();
  
  const user = useUserStore((state) => state.user);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  useEffect(() => {
    let unsubscribe;
    if (!isAnonymous || isAnonymous) {
      if (!isAnonymous && user && role !== 'merchant' && merchantId !== undefined) {
        console.log('============== PASSED THE CHECK.')
      }
      if (user && role) {
        const userId = role === 'merchant' ? uid : merchantId || '';
        unsubscribe = getTransactions(userId, setTransactions);
      }
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, isAnonymous, role, uid, merchantId]);

};