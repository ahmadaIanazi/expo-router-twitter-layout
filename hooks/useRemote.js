import { useEffect } from 'react';
import { getCards } from '../data/get/getCards';
import { useUserStore } from '../stores/useUserStore';
import { useAuthStore } from '../stores/useAuthStore';
import { getRemote } from '../data/get/getRemote';
import { useRemoteStore } from '../stores/useRemoteStore';

export const useRemote = () => {
  const { setRemoteDocs } = useRemoteStore();
  const { role, uid, merchantId } = useUserStore();

  const user = useUserStore((state) => state.user);
  const isAnonymous = useAuthStore((state) => state.isAnonymous);

  useEffect(() => {
    let unsubscribe;
    if (!isAnonymous || isAnonymous) {
      if (user && role) {
        const userId = role === 'merchant' ? uid : merchantId;
        unsubscribe = getRemote(userId, setRemoteDocs);
      }
    }
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user, isAnonymous]);
};