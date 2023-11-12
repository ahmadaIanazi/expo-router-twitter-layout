import { router } from 'expo-router';
import { RecaptchaVerifier, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../zetup/firebase';
import { login } from '../data/auth/login';
import { loginAnonymous } from '../data/auth/loginAnonymous';
import { signout } from '../data/auth/signout';
import { signup } from '../data/auth/signup';
import { signupAnonymous } from '../data/auth/signupAnonymous';
import { useAuthStore } from '../stores/useAuthStore';
import { useContext } from 'react';
import Localization from '../translations/_context';
import { home_screen, landing_screen } from '../zetup/routing_setup';
import { useUserStore } from '../stores';
import authNative from '@react-native-firebase/auth';

export default function executeAuth() {
  const { setAuthCheck, setIsAnonymous, setRefresh } = useAuthStore();
  const { setByPhone, byPhone } = useUserStore();
  const l = useContext(Localization);

  const executeSignup = async (email: string, password: string): Promise<void> => {
    try {
      await signup(email, password);
      router.replace(home_screen);
      setByPhone(false);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case 'auth/wrong-password':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case 'auth/too-many-requests':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case 'auth/invalid-email':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case 'auth/weak-password':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const executeSignupAnonymous = async (): Promise<void> => {
    try {
      await signupAnonymous();
      router.replace(home_screen);
      setByPhone(false);
      setRefresh(true);
      setIsAnonymous(true);
      setAuthCheck(true);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case 'auth/wrong-password':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case 'auth/too-many-requests':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case 'auth/invalid-email':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case 'auth/weak-password':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const executeLogin = async (email: string, password: string): Promise<void> => {
    try {
      await login(email, password);
      router.replace(home_screen);
      setByPhone(false);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case 'auth/wrong-password':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case 'auth/too-many-requests':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case 'auth/invalid-email':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case 'auth/weak-password':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const executeLoginAnonymous = async (email: string, password: string): Promise<void> => {
    try {
      await loginAnonymous(email, password);
      router.replace(home_screen);
      setByPhone(false);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
    } catch (error: any) {
      setAuthCheck(null);
      switch (error.code) {
        case 'auth/email-already-in-use':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case 'auth/wrong-password':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case 'auth/too-many-requests':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case 'auth/invalid-email':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case 'auth/weak-password':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const executeLogout = async (): Promise<void> => {
    try {
      if (byPhone){
        await authNative().signOut()
      } else {
        await signout();
      }
      router.replace(landing_screen);
      setRefresh(true);
      setIsAnonymous(null);
      setAuthCheck(null);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case 'auth/wrong-password':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case 'auth/too-many-requests':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case 'auth/invalid-email':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case 'auth/weak-password':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const executeResetPassword = async (email: string): Promise<void> => {
    try {
      await sendPasswordResetEmail(auth, email);
      router.back();
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case 'auth/wrong-password':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case 'auth/too-many-requests':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case 'auth/invalid-email':
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case 'auth/weak-password':
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const executeSignByPhone_confirmOTP_andSign = async (
    confirmationResult,
    otp: number
  ): Promise<void> => {
    try {
      await confirmationResult.confirm(otp.toString()); // Convert OTP to string if it's a number
      // Handle successful verification (e.g., navigate to the home screen)
      // One more step needs to be done, I want to take this confirmation and get the user,
      // And perform Auth by Firebase SDK not Auth by Firebase React Native.
      setByPhone(true);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
      // I am not sure how to route them but after we perform the auth refresh.
      router.replace(home_screen);
      console.log('SUCCESS PHONE OTP CONFIRMATION');
    } catch (error) {
      // Handle verification error
      console.error('Error during OTP confirmation:', error);
      // Customize error handling based on your requirements
    }
  };

  return {
    executeSignup,
    executeLogin,
    executeSignupAnonymous,
    executeLoginAnonymous,
    executeLogout,
    executeResetPassword,
    executeSignByPhone_confirmOTP_andSign,
  };
}
