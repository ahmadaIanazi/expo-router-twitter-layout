import { useContext } from "react";
import { router } from "expo-router";

import { auth } from "../lib/firebase";
import authNative from "@react-native-firebase/auth";
import { OAuthProvider, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithCredential } from "firebase/auth";
import * as AppleAuthentication from "expo-apple-authentication";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";

import { login } from "../data/auth/login";
import { loginAnonymous } from "../data/auth/loginAnonymous";
import { signout } from "../data/auth/signout";
import { signup } from "../data/auth/signup";
import { signupAnonymous } from "../data/auth/signupAnonymous";

import { useUserStore, useAuthStore } from "../stores";

import Localization from "../translations";

import { RouteNames } from "../app/_layout/constants";
import manageLocales from "./manageLocales";

export default function manageAuth() {
  const { setAuthCheck, setIsAnonymous, setRefresh, isAnonymous, isOffline } = useAuthStore();
  const { byFirebaseNativeAuth, setByFirebaseNativeAuth } = useUserStore();

  const { l } = manageLocales()

  const status = {
    isAnonymous,
    isOffline
  }

  const handleSignupByEmailAndPassword = async (email: string, password: string): Promise<void> => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace(RouteNames.homeRoute);
      setByFirebaseNativeAuth(false);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
    } catch (error: any) {
      console.log('ERROR:', error)
      switch (error.code) {
        case "auth/email-already-in-use":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case "auth/wrong-password":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case "auth/too-many-requests":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case "auth/invalid-email":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case "auth/weak-password":
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
      router.replace(RouteNames.homeRoute)
      setByFirebaseNativeAuth(false);
      setRefresh(true);
      setIsAnonymous(true);
      setAuthCheck(true);
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case "auth/wrong-password":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case "auth/too-many-requests":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case "auth/invalid-email":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case "auth/weak-password":
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
      router.replace(RouteNames.homeRoute)
      setByFirebaseNativeAuth(false);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case "auth/wrong-password":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case "auth/too-many-requests":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case "auth/invalid-email":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case "auth/weak-password":
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
      router.replace(RouteNames.homeRoute)
      setByFirebaseNativeAuth(false);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
    } catch (error: any) {
      setAuthCheck(null);
      switch (error.code) {
        case "auth/email-already-in-use":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case "auth/wrong-password":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case "auth/too-many-requests":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case "auth/invalid-email":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case "auth/weak-password":
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
      if (byFirebaseNativeAuth) {
        await authNative().signOut();
      } else {
        await signout();
      }
      router.replace(RouteNames.landingRoute)
      setRefresh(true);
      setIsAnonymous(null);
      setAuthCheck(null);
      setByFirebaseNativeAuth(false);
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case "auth/wrong-password":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case "auth/too-many-requests":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case "auth/invalid-email":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case "auth/weak-password":
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
        case "auth/email-already-in-use":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'email-already-in-use' });
          throw l.error_email_in_use;
        case "auth/wrong-password":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'auth/wrong-password' });
          throw l.error_password_wrong;
        case "auth/too-many-requests":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'too-many-requests' });
          throw l.error_account_locked;
        case "auth/invalid-email":
          //  vexoit('AUTH', { method: 'login', status: 'failed', event: 'invalid-email' });
          throw l.error_email_invalid;
        case "auth/weak-password":
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'weak-password' });
          throw l.error_password_too_weak;
        default:
          //  vexoit('AUTH', { method: 'signup', status: 'failed', event: 'error' });
          throw l.error_occurred;
      }
    }
  };

  const handleLoginSignupByPhone = async (confirmationResult, otp: number): Promise<void> => {
    try {
      await confirmationResult.confirm(otp.toString()); // Convert OTP to string if it's a number
      // Handle successful verification (e.g., navigate to the home screen)
      // One more step needs to be done, I want to take this confirmation and get the user,
      // And perform Auth by Firebase SDK not Auth by Firebase React Native.
      setByFirebaseNativeAuth(true);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);
      router.replace(RouteNames.homeRoute)
      console.log("SUCCESS PHONE OTP CONFIRMATION");
    } catch (error) {
      // Handle verification error
      console.error("Error during OTP confirmation:", error);
      // Customize error handling based on your requirements
    }
  };

  const handleAuthWithApple = async () => {
    try {
      const appleCredentials = await AppleAuthentication.signInAsync({
        requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME, AppleAuthentication.AppleAuthenticationScope.EMAIL],
      });
      const { identityToken } = appleCredentials;
      if(identityToken){
        // Create a Firebase credential from the response
        const provider = new OAuthProvider('apple.com')
        provider.addScope('email')
        provider.addScope('name')
        const credentials = provider.credential({ idToken: identityToken })

        await signInWithCredential(auth, credentials)
        setByFirebaseNativeAuth(true);
        setRefresh(true);
        setIsAnonymous(false);
        setAuthCheck(true);
      }
      // Handle credentials and setAppleAuthCredentials
    } catch (e) {
      console.log(e);
    }
  };

  const handleAuthWithAppleGetCredentials = async () => {
    const credentialState = await AppleAuthentication.getCredentialStateAsync(userToken.user);
    console.log(credentialState);
    return credentialState;
  };

  const handleAuthWithAppleRefresh = async () => {
    const result = await AppleAuthentication.refreshAsync({
      user: userToken.user,
    });
    console.log(result);
    // setUser .. etc
  };

  const handleAuthWithGoogle = async () => {
    try {
      GoogleSignin.configure({
        // scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
        webClientId: process.env.EXPO_PUBLIC_GOOGLE_OAuth_client_ID_FIREBASE, // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.
      });

      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();

      const googleCredential = authNative.GoogleAuthProvider.credential(idToken);
      await authNative().signInWithCredential(googleCredential);

      // Update state or perform necessary actions after successful authentication
      setByFirebaseNativeAuth(true);
      setRefresh(true);
      setIsAnonymous(false);
      setAuthCheck(true);

      router.replace(RouteNames.homeRoute)
    } catch (error) {
      console.log('Error:', error )
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // Handle cancellation of the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // Handle if an operation (e.g., sign-in) is already in progress
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Handle scenario when play services are not available or outdated
      } else {
        // Handle other errors that might occur during authentication
      }
    }
  };

  const handleAuthWithGoogleGetCurrentUser = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    // setState({ currentUser });
    console.log("Get Current User:", currentUser);
  };

  const handleAuthGoogleSignout = async () => {
    try {
      await GoogleSignin.signOut();
      // setState({ user: null }); // Remember to remove the user from your app's state as well
      // Do authcheck .. etc
    } catch (error) {
      console.error(error);
    }
  };

  return {
    status,
    emailAndPassword: {
      signup: handleSignupByEmailAndPassword,
      signin: handleLogin,
      signout: handleLogout,
      reset: handleResetPassword,
    },
    phoneNumber: {
      confirm: handleLoginSignupByPhone,
    },
    apple: {
      authenticate: handleAuthWithApple,
      getCredentials: handleAuthWithAppleGetCredentials,
      refresh: handleAuthWithAppleRefresh,
    },
    google: {
      authenticate: handleAuthWithGoogle,
      getCurrentUser: handleAuthWithGoogleGetCurrentUser,
      signout: handleAuthGoogleSignout,
    },
    anonymous: {
      signup: handleSignupAnonymous,
      signin: handleLoginAnonymous,
      signout: handleLogout,
      link: "",
    },
    handleEmailLogin: handleLogin,
    handleSignupAnonymous,
    handleLoginAnonymous,
    handleLogout,
    handleResetPassword,
    handleLoginSignupByPhone,
  };
}
