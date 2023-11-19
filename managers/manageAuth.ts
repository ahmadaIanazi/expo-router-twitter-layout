import authNative from '@react-native-firebase/auth';
import { router } from 'expo-router';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useContext } from 'react';
import { login } from '../data/auth/login';
import { loginAnonymous } from '../data/auth/loginAnonymous';
import { signout } from '../data/auth/signout';
import { signup } from '../data/auth/signup';
import { signupAnonymous } from '../data/auth/signupAnonymous';
import { useUserStore, useAuthStore } from '../stores';

import Localization from '../translations';
import { auth } from '../zetup/firebase';
import { home_screen, landing_screen } from '../zetup/routing_setup';

import {
  TwitterAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from 'firebase/auth';

export default function manageAuth() {
  const { setAuthCheck, setIsAnonymous, setRefresh } = useAuthStore();
  const { setByPhone, byPhone } = useUserStore();
  const l = useContext(Localization);

  const handleSignup = async (email: string, password: string): Promise<void> => {
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

  const handleSignupAnonymous = async (): Promise<void> => {
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

  const handleLogin = async (email: string, password: string): Promise<void> => {
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

  const handleLoginAnonymous = async (email: string, password: string): Promise<void> => {
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

  const handleLogout = async (): Promise<void> => {
    try {
      if (byPhone) {
        await authNative().signOut();
      } else {
        await signout();
      }
      router.replace(landing_screen);
      setRefresh(true);
      setIsAnonymous(null);
      setAuthCheck(null);
      setByPhone(false)
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

  const handleResetPassword = async (email: string): Promise<void> => {
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

  const handleLoginSignupByPhone = async (
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
      router.replace(home_screen);
      console.log('SUCCESS PHONE OTP CONFIRMATION');
    } catch (error) {
      // Handle verification error
      console.error('Error during OTP confirmation:', error);
      // Customize error handling based on your requirements
    }
  };

  const handleAuthWithTwitter = async () => {
    try{

      const provider = new TwitterAuthProvider();
      provider.setCustomParameters({
        lang: l.l,
      });
      await signInWithPopup(auth, provider);


    } catch (error){
      console.log('ERROR With Twitter Redirect')
    }
  }

  const handleAuthWithTwitterConfirm = async () => {
    getRedirectResult(auth)
      .then((result) => {
        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
        // You can use these server side with your app's credentials to access the Twitter API.
        const credential = TwitterAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const secret = credential.secret;
        // ...
        setByPhone(true);
        setRefresh(true);
        setIsAnonymous(false);
        setAuthCheck(true);
        router.replace(home_screen);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log('Authentication Error:', error)
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = TwitterAuthProvider.credentialFromError(error);
        // ...
      });
  }

  return {
    emailAndPassword: {
      signup: '',
      signin: '',
      signout: '',
    },
    phoneNumber: {
      sendCode: '',
      confirmCodeAndSign: '',
      signout: '',
    },
    apple: {
      authenticate: '',
      confirmAndSign: '',
    },
    google: {
      authenticate: '',
      confirmAndSign: '',
    },
    twitter: {
      authenticate: handleAuthWithTwitter,
      confirmAndSign: handleAuthWithTwitterConfirm,
    },
    handleEmailSignup: handleSignup,
    handleLogin,
    handleSignupAnonymous,
    handleLoginAnonymous,
    handleLogout,
    handleResetPassword,
    handleLoginSignupByPhone,
  };
}
