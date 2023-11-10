import { useEffect } from 'react';
import { getCards } from '../data/get/getCards';
import { useUserStore } from '../stores/useUserStore';
import { useAuthStore } from '../stores/useAuthStore';
import { useDataStore } from '../stores/useDataStore';

export const useCards = () => {
  const { role, uid, merchantId } = useUserStore();
  const { setCards } = useDataStore();
  const user = useUserStore((state) => state.user);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  useEffect(() => {
    let unsubscribe;
    if (!isAnonymous || isAnonymous) {
      if (user && role) {
        const userId = role === 'merchant' ? uid : merchantId || '';
        unsubscribe = getCards(userId, setCards);
      }
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, isAnonymous, role, uid, merchantId]);
};
